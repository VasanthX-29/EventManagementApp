import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  introHeading="Welcome to Event Management App !";

  aboutapp="Welcome to our dedicated employee management app! Designed with simplicity and efficiency in mind, our app focuses on helping you effectively manage your employee data. From adding new employees to updating their information, even deleting records, our app provides a seamless experience for performing all CRUD (Create, Read, Update, Delete) operations on your employee database. Whether you're a small business or a large organization, our app streamlines the process of managing employee information, allowing you to stay organized and make informed decisions. With its user-friendly interface and comprehensive functionality, our employee management app is your trusted tool for handling all aspects of employee data management."

}
