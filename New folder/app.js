// // // app.js

// // // Firebase Setup
// // const firebaseConfig = {
// //     apiKey: "YOUR_API_KEY",
// //     authDomain: "YOUR_AUTH_DOMAIN",
// //     projectId: "YOUR_PROJECT_ID",
// //     storageBucket: "YOUR_STORAGE_BUCKET",
// //     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
// //     appId: "YOUR_APP_ID"
// // };

// // const app = firebase.initializeApp(firebaseConfig);
// // const db = firebase.firestore(app);

// // // Employee Form
// // const employeeForm = document.getElementById('employeeForm');
// // const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

// // // Add Employee Data
// // employeeForm.addEventListener('submit', async (e) => {
// //     e.preventDefault();

// //     const name = document.getElementById('name').value;
// //     const email = document.getElementById('email').value;
// //     const cnic = document.getElementById('cnic').value;
// //     const phone = document.getElementById('phone').value;
// //     const pictureFile = document.getElementById('picture').files[0];

// //     // Image Upload to Firebase Storage
// //     const storageRef = firebase.storage().ref().child('employeePictures/' + pictureFile.name);
// //     const uploadTask = storageRef.put(pictureFile);

// //     uploadTask.on('state_changed',
// //         (snapshot) => { },
// //         (error) => console.log(error),
// //         async () => {
// //             const pictureUrl = await uploadTask.snapshot.ref.getDownloadURL();
// //             // Save Employee Data to Firestore
// //             const docRef = await db.collection("employees").add({
// //                 name: name,
// //                 email: email,
// //                 cnic: cnic,
// //                 phone: phone,
// //                 picture: pictureUrl
// //             });
// //             console.log("Employee added with ID: ", docRef.id);
// //             displayEmployees();
// //         }
// //     );
// // });

// // // Display Employees
// // async function displayEmployees() {
// //     const snapshot = await db.collection("employees").get();
// //     employeeTable.innerHTML = '';

// //     snapshot.forEach((doc) => {
// //         const employee = doc.data();
// //         const row = employeeTable.insertRow();
// //         row.innerHTML = `
// //         <td>${doc.id}</td>
// //         <td>${employee.name}</td>
// //         <td>${employee.email}</td>
// //         <td>${employee.cnic}</td>
// //         <td>${employee.phone}</td>
// //         <td><img src="${employee.picture}" alt="Employee Picture" width="50"></td>
// //         <td>
// //           <button onclick="editEmployee('${doc.id}')">Edit</button>
// //           <button onclick="deleteEmployee('${doc.id}')">Delete</button>
// //           <button onclick="generateIDCard('${doc.id}')">Generate ID Card</button>
// //         </td>
// //       `;
// //     });
// // }

// // // Edit Employee
// // async function editEmployee(id) {
// //     const docRef = await db.collection("employees").doc(id).get();
// //     const employee = docRef.data();

// //     document.getElementById('name').value = employee.name;
// //     document.getElementById('email').value = employee.email;
// //     document.getElementById('cnic').value = employee.cnic;
// //     document.getElementById('phone').value = employee.phone;
// // }

// // // Delete Employee
// // async function deleteEmployee(id) {
// //     await db.collection("employees").doc(id).delete();
// //     console.log("Employee deleted");
// //     displayEmployees();
// // }

// // // Generate ID Card
// // async function generateIDCard(id) {
// //     const docRef = await db.collection("employees").doc(id).get();
// //     const employee = docRef.data();

// //     document.getElementById('idCardContent').innerHTML = `
// //       <img src="${employee.picture}" alt="Employee Picture">
// //       <h3>${employee.name}</h3>
// //       <p>Email: ${employee.email}</p>
// //       <p>CNIC: ${employee.cnic}</p>
// //       <p>Phone: ${employee.phone}</p>
// //     `;
// //     document.getElementById('idCard').style.display = 'block';
// // }

// // // Initial Load
// // displayEmployees();









// // // Logout functionality
// // document.getElementById('logoutBtn').addEventListener('click', () => {
// //     firebase.auth().signOut().then(() => {
// //         window.location.href = 'login.html'; // Redirect to login page
// //     });
// // });

// // // Add Employee Popup
// // document.getElementById('addEmployeeBtn').addEventListener('click', () => {
// //     document.getElementById('addEmployeePopup').style.display = 'flex';
// // });

// // document.getElementById('closePopupBtn').addEventListener('click', () => {
// //     document.getElementById('addEmployeePopup').style.display = 'none';
// // });

// // // Add Employee Data
// // document.getElementById('employeeForm').addEventListener('submit', async (e) => {
// //     e.preventDefault();

// //     const name = document.getElementById('employeeName').value;
// //     const email = document.getElementById('employeeEmail').value;
// //     const cnic = document.getElementById('employeeCNIC').value;
// //     const phone = document.getElementById('employeePhone').value;
// //     const pictureFile = document.getElementById('employeePicture').files[0];

// //     // Serial Number (Automatic Increment or Random)
// //     const serial = Math.floor(Math.random() * 1000) + 1;
// //     const employeeId = Math.random().toString(36).substr(2, 9); // Random ID

// //     // Upload picture to Firebase Storage
// //     const storageRef = firebase.storage().ref().child('employeePictures/' + pictureFile.name);
// //     const uploadTask = storageRef.put(pictureFile);

// //     uploadTask.on('state_changed', null, (error) => {
// //         console.error(error);
// //     }, async () => {
// //         const pictureUrl = await uploadTask.snapshot.ref.getDownloadURL();

// //         // Save Employee Data to Firestore
// //         await db.collection('employees').add({
// //             serial,
// //             name,
// //             email,
// //             cnic,
// //             phone,
// //             picture: pictureUrl,
// //             employeeId
// //         });

// //         // Close Popup and refresh employee list
// //         document.getElementById('addEmployeePopup').style.display = 'none';
// //         displayEmployees();
// //     });
// // });

// // // Display Employees in Table
// // async function displayEmployees() {
// //     const snapshot = await db.collection('employees').get();
// //     const tbody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
// //     tbody.innerHTML = ''; // Clear previous rows

// //     snapshot.forEach(doc => {
// //         const employee = doc.data();
// //         const row = tbody.insertRow();
// //         row.innerHTML = `
// //         <td>${employee.serial}</td>
// //         <td>${employee.name}</td>
// //         <td>${employee.email}</td>
// //         <td>${employee.cnic}</td>
// //         <td>${employee.phone}</td>
// //         <td><img src="${employee.picture}" width="50" /></td>
// //         <td><button onclick="deleteEmployee('${doc.id}')">Delete</button></td>
// //       `;
// //     });
// // }

// // // Delete Employee
// // async function deleteEmployee(id) {
// //     await db.collection('employees').doc(id).delete();
// //     displayEmployees();
// // }

// // // Initial Load
// // displayEmployees();














// // Logout functionality
// document.getElementById('logoutBtn').addEventListener('click', () => {
//     firebase.auth().signOut().then(() => {
//         window.location.href = 'login.html'; // Redirect to login page
//     });
// });

// // Add Employee Popup
// document.getElementById('addEmployeeBtn').addEventListener('click', () => {
//     document.getElementById('addEmployeePopup').style.display = 'flex';
// });

// document.getElementById('closePopupBtn').addEventListener('click', () => {
//     // Close the popup and reset form
//     document.getElementById('addEmployeePopup').style.display = 'none';
//     document.getElementById('employeeForm').reset();  // Reset form fields
// });

// // Add Employee Data
// document.getElementById('employeeForm').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const name = document.getElementById('employeeName').value;
//     const email = document.getElementById('employeeEmail').value;
//     const cnic = document.getElementById('employeeCNIC').value;
//     const phone = document.getElementById('employeePhone').value;
//     const pictureFile = document.getElementById('employeePicture').files[0];

//     // Serial Number (Automatic Increment or Random)
//     const serial = Math.floor(Math.random() * 1000) + 1;
//     const employeeId = Math.random().toString(36).substr(2, 9); // Random ID

//     // Upload picture to Firebase Storage
//     const storageRef = firebase.storage().ref().child('employeePictures/' + pictureFile.name);
//     const uploadTask = storageRef.put(pictureFile);

//     uploadTask.on('state_changed', null, (error) => {
//         console.error(error);
//     }, async () => {
//         const pictureUrl = await uploadTask.snapshot.ref.getDownloadURL();

//         // Save Employee Data to Firestore
//         await db.collection('employees').add({
//             serial,
//             name,
//             email,
//             cnic,
//             phone,
//             picture: pictureUrl,
//             employeeId
//         });

//         // Close Popup and refresh employee list
//         document.getElementById('addEmployeePopup').style.display = 'none';
//         displayEmployees();
//     });
// });

// // Display Employees in Table
// async function displayEmployees() {
//     const snapshot = await db.collection('employees').get();
//     const tbody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
//     tbody.innerHTML = ''; // Clear previous rows

//     snapshot.forEach(doc => {
//         const employee = doc.data();
//         const row = tbody.insertRow();
//         row.innerHTML = `
//         <td>${employee.serial}</td>
//         <td>${employee.name}</td>
//         <td>${employee.email}</td>
//         <td>${employee.cnic}</td>
//         <td>${employee.phone}</td>
//         <td><img src="${employee.picture}" width="50" /></td>
//         <td><button onclick="deleteEmployee('${doc.id}')">Delete</button></td>
//       `;
//     });
// }

// // Delete Employee
// async function deleteEmployee(id) {
//     await db.collection('employees').doc(id).delete();
//     displayEmployees();
// }

// // Initial Load
// displayEmployees();


























// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        window.location.href = 'login.html'; // Redirect to login page
    });
});

// Add Employee Popup
document.getElementById('addEmployeeBtn').addEventListener('click', () => {
    document.getElementById('addEmployeePopup').style.display = 'flex';
});

document.getElementById('closePopupBtn').addEventListener('click', () => {
    // Close the popup and reset form
    document.getElementById('addEmployeePopup').style.display = 'none';
    document.getElementById('employeeForm').reset();  // Reset form fields
});

// Add Employee Data
document.getElementById('employeeForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('employeeName').value;
    const email = document.getElementById('employeeEmail').value;
    const cnic = document.getElementById('employeeCNIC').value;
    const phone = document.getElementById('employeePhone').value;
    const pictureFile = document.getElementById('employeePicture').files[0];

    // Serial Number (Automatic Increment or Random)
    const serial = Math.floor(Math.random() * 1000) + 1;
    const employeeId = Math.random().toString(36).substr(2, 9); // Random ID

    // Upload picture to Firebase Storage
    const storageRef = firebase.storage().ref().child('employeePictures/' + pictureFile.name);
    const uploadTask = storageRef.put(pictureFile);

    uploadTask.on('state_changed', null, (error) => {
        console.error(error);
    }, async () => {
        const pictureUrl = await uploadTask.snapshot.ref.getDownloadURL();

        // Save Employee Data to Firestore
        await db.collection('employees').add({
            serial,
            name,
            email,
            cnic,
            phone,
            picture: pictureUrl,
            employeeId
        });

        // Close Popup and refresh employee list
        document.getElementById('addEmployeePopup').style.display = 'none';
        displayEmployees();
    });
});

// Display Employees in Table
async function displayEmployees() {
    const snapshot = await db.collection('employees').get();
    const tbody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear previous rows

    snapshot.forEach(doc => {
        const employee = doc.data();
        const row = tbody.insertRow();
        row.innerHTML = `
        <td>${employee.serial}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.cnic}</td>
        <td>${employee.phone}</td>
        <td><img src="${employee.picture}" width="50" /></td>
        <td><button onclick="deleteEmployee('${doc.id}')">Delete</button></td>
      `;
    });
}

// Delete Employee
async function deleteEmployee(id) {
    await db.collection('employees').doc(id).delete();
    displayEmployees();
}

// Search Employee Functionality
async function searchEmployee() {
    const query = document.getElementById('searchInput').value.toLowerCase(); // Get search input and convert to lowercase
    const snapshot = await db.collection('employees').get();
    const tbody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear previous rows

    snapshot.forEach(doc => {
        const employee = doc.data();
        // Check if query matches either name or email
        if (employee.name.toLowerCase().includes(query) || employee.email.toLowerCase().includes(query)) {
            const row = tbody.insertRow();
            row.innerHTML = `
          <td>${employee.serial}</td>
          <td>${employee.name}</td>
          <td>${employee.email}</td>
          <td>${employee.cnic}</td>
          <td>${employee.phone}</td>
          <td><img src="${employee.picture}" width="50" /></td>
          <td><button onclick="deleteEmployee('${doc.id}')">Delete</button></td>
        `;
        }
    });
}

// Initial Load
displayEmployees();
