import ApiConfig from './ApiConfig';
import UrlApi from './UrlApi';

const postCredencial = async (uriImage, almCurp, almEmail, almName, almFname, almSname, almControl) => {
  try {
    // Primera peticion
    const dataAdmin = await ApiConfig.post('admin/login', {
      email: UrlApi.USERAPLE,
      password: UrlApi.PASSWORD,
    });

    // Segunda peticion
    const dataUser = await ApiConfig.post(
      'users',
      {
        confirmed: true,
        CURP: almCurp,
        username: almCurp,
        email: almEmail,
        password: almCurp,
        name: almName,
        firstLastName: almFname,
        secondLastName: almSname,
        role: UrlApi.ROLE,
      },
      {
        headers: {
          Authorization: `Bearer ${dataAdmin.data.data.token}`,
        },
      },
    );

    // Tercera peticion
    const formData = new FormData();
    formData.append(
      'data',
      JSON.stringify({
        matricula: almControl,
        processStatus: 'enviado',
        candidate: true,
      }),
    );

    let filename = almControl + '-image.jpg';

    formData.append('files.photography', {
      uri: uriImage,
      name: filename,
      type: 'image/jpeg',
    });

    const dataEstudent = await fetch(`${UrlApi.API}/students`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${dataAdmin.data.data.token}`,
      },
    });

    const Estudentjson = await dataEstudent.json();

    // Cuarta peticion
    const dataUserPut = await ApiConfig.put(
      `users/${dataUser.data._id}`,
      {
        student: Estudentjson._id,
      },
      {
        headers: {
          Authorization: `Bearer ${dataAdmin.data.data.token}`,
        },
      },
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Estudentjson);
      }, 2000);
    });
  } catch (error) {
    console.log(error);
  }
};

const getFoto = async ncontrol => {
  try {
    const dataAdmin = await ApiConfig.post('admin/login', {
      email: UrlApi.USERAPLE,
      password: UrlApi.PASSWORD,
    });

    const foto = await ApiConfig.get(`students?matricula=${ncontrol}`, {
      headers: {
        Authorization: `Bearer ${dataAdmin.data.data.token}`,
      },
    });

    const fotoUrl = foto.data[0].photography.url;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fotoUrl);
      }, 2000);
    });
  } catch (error) {
    console.log(error);
  }
};

const getAvisos = async fecha => {
  try {
    const dataAdmin = await ApiConfig.post('admin/login', {
      email: UrlApi.USERAPLE,
      password: UrlApi.PASSWORD,
    });

    const foto = await ApiConfig.get(`notifications-credentials?title=${fecha}`, {
      headers: {
        Authorization: `Bearer ${dataAdmin.data.data.token}`,
      },
    });

    const avisosUrl = foto.data[0].images;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(avisosUrl);
      }, 2000);
    });
  } catch (error) {
    console.log(error);
  }
};

export { postCredencial, getFoto, getAvisos };
