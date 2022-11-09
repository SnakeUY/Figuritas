const url = "http://localhost:8080/";

export const getFiguritas = (onSuccess,onFinish) =>
    fetch(url)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);

export const getPaises = (onSuccess,onFinish) =>{
  fetch(`${url}paises`)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);
}
export const httpEditFigurita = (id,figurita,onSuccess,onFinish) => 
  fetch(`${url}${id}`,{
            method: 'PUT',
            headers:{ 
                'Accept': 'application/json',
                'Content-Type':'application/json'
              },
            body: JSON.stringify(figurita),
          }).then((data) => data.json())
          .then(onSuccess)
          .finally(onFinish)

export const getFiguritasByPais = (pais,onSuccess,onFinish) =>{
  fetch(`${url}byPais/${pais}`)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);
}

