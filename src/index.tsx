import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

interface IUser {
    name: string
    phone: string
    email: string
    animals?: string[]
    cars?: string[]
    hasChildren: boolean
    hasEducation: boolean
}

const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

},
{
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
},
{
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
}
]

//1 Создать строку из имен пользователей через запятую

const userNames: string = users.map((elem: IUser): IUser["name"] => elem.name).join(', ');

console.log(userNames)

//2 Посчитать общее количнство машин у пользователей

const carsAmount: number = users.reduce((acc: number, users: IUser) => acc + ["cars"].length, 0)

console.log(carsAmount)

//3 Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

const educatedUsers = users.filter((el: IUser) => el.hasEducation === true)

console.log(educatedUsers)

//4 Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

const animalOwners = users.filter((element: IUser) => element.hasOwnProperty('animals'))

console.log(animalOwners)

//5 Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

const carsArr = users.map((elem: IUser): IUser["cars"] => elem.cars).join()

console.log(carsArr)