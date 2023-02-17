// Usage:
// getData("john", 2)
//   .then(data => {
//     // Handle the resolved data here
//   })
//   .catch(error => {
//     // Handle the error here
//   });

function getData(uid) {
  return new Promise((resolve, reject) => {
    $.get({
      url: API+`/${uid}/get`,
      success: function(data) {

        resolve(data);
      },
      error: function(error) {
        reject(error);
      }
    });
  });
}

function sendData(uid, data) {

  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: API+`/${uid}/post`,
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      
    });
  });
}
