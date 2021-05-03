
const mysql = require('mysql');

// Create DB Connection
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hcFs151!',
  database:'sys'
});

// DB Connection Check
con.connect((err) => {
  if(err){
    console.log('Error connecting to database');
    return;
  }
  console.log('Connection established');
});

// DB Select Query
con.query('SELECT * FROM customers', (err,rows) => {
  if(err) throw err;

  console.log('Data received from database:\n');
  console.log(rows);
  rows.forEach( (row) => {
    console.log(`${row.company_name}'s email is ${row.email_address}`);
  });
});

// DB Insert Query
// var rn = new Date();
// new_customer = { company_name: 'First Digtal Media', first_name: '', last_name: '', telephone_no: '', mobile_no: '', email_address: 'natasha@getyourmobi.co.uk', email_address_alt: '', building: '', street: '', town: '', county: '', postcode: '', cancelled: 0, cdate: rn, sdate: rn};
// con.query('INSERT INTO customers SET ?', new_customer, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
//   return;
// });

// DB Update Query
con.query(
  'UPDATE customers SET email_address = ? Where ID = ?',
  ['tasha@getyourmobi.co.uk', 2],
  (err, result) => {
    if (err) throw err;

    console.log(`Changed ${result.changedRows} row(s)`);
  }
);

// DB Delete Query
con.query(
  'DELETE FROM customers WHERE id = ?', [2], (err, result) => {
    if (err) throw err;

    console.log(`Deleted ${result.affectedRows} row(s)`);
  }
);