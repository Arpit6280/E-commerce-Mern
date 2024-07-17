// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    //TODO: on server it will only return some info of user(not password)
    resolve({ data });
  });
}

export function checkUser(loginData) {
  return new Promise(async (resolve, reject) => {
    const email = loginData.email;
    const password = loginData.password;
    const response = await fetch("http://localhost:8080/users?email=" + email);

    const data = await response.json();
    console.log(data);
    if (data.length && password === data[0].password) {
      resolve({ data: data[0] });
    } else {
      reject({ message: "User not found" });
    }
    //TODO: on server it will only return some info of user(not password)
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    //TODO: on server it will only return some info of user(not password)
    resolve({ data });
  });
}
