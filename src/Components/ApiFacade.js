import { decode } from 'jsonwebtoken';
import { URL } from './../settings.js';

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the returned object when you do)*/
  const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  const getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  }
  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem('Role');
  }
  const setRole = (role) => {
    localStorage.setItem('Role', role)
  }
  const getRole = () => {
    return localStorage.getItem('Role');
  }

  const getPayloadFromToken = (token) => {
    const payload = decode(token);
    return payload
  }

  const login = (user, password) => {
    const options = makeOptions("POST", true, { username: user, password: password });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then(res => {
        setToken(res.token);
        setRole(getPayloadFromToken(res.token).roles);
      })
  }

  const addCourse = (course) => {
    const options = makeOptions("POST", true, { courseName: course.courseName, description: course.description });
    return fetch(URL + "/api/course/add", options)
      .then(handleHttpErrors);
  }

  const addClass = (Class) => {
    const options = makeOptions("POST", true, { semester: Class.semester, numberOfStudents: Class.numberOfStudents, course:{id:Class.course.id} });
    return fetch(URL + "/api/class/add", options)
      .then(handleHttpErrors);
  }

  const fetchData = () => {
    const options = makeOptions("GET", true);
    return fetch(`${URL}/api/info/${getRole()}`, options).then(handleHttpErrors);
  }

  const getCourses = () => {
    const options = makeOptions("GET", true);
    return fetch(URL + "/api/course/all", options).then(handleHttpErrors);
  }

  const getClasses = () => {
    const options = makeOptions("GET", true);
    return fetch(URL + "/api/class/all", options).then(handleHttpErrors);
  }

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    addCourse,
    addClass,
    fetchData,
    getCourses,
    getClasses
  }
}
const facade = apiFacade();
export default facade;
