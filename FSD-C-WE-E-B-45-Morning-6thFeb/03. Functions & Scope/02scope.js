// scope
// global
// local

var a = 45;
let b = 67;
const c = 78;

console.log(a, b, c);

{
  // block of scope >> local scope
  let x = 450000;
  console.log(x);
  console.log(b);

  var f = 89;
  console.log(f);

  const d = 8000;
  console.log(d);
}
console.log(f);
//  console.log(d) //ReferenceError: d is not defined
//  console.log(x) //ReferenceError: x is not defined
console.log(a, b, c);
console.log(a + b + c);

var t1 = 78;
let f1 = 90;
const x1 = 80;

console.log(f1); //90
console.log(f2); //error
console.log(f3); //error
console.log(f4); //error

console.log(t1); //78
console.log(t2); //undefined
console.log(t3); //undefined
console.log(t4); //undefined

console.log(x1); //80
console.log(x2); //error
console.log(x3); //error
console.log(x4); //error

{
  var t2 = 780;
  let f2 = 900;
  const x2 = 800;

  console.log(f1); //90
  console.log(f2); //900
  console.log(f3); //error
  console.log(f4); //error

  console.log(t1); //78
  console.log(t2); //780
  console.log(t3); //undefined
  console.log(t4); //undefined

  console.log(x1); //80
  console.log(x2); //800
  console.log(x3); //error
  console.log(x4); //error

  {
    var t3 = 781;
    let f3 = 91;
    const x3 = 901;

    console.log(f1); //90
    console.log(f2); //900
    console.log(f3); //91
    console.log(f4); //error

    console.log(t1); //78
    console.log(t2); //780
    console.log(t3); //781
    console.log(t4); //undefined

    console.log(x1); //80
    console.log(x2); //800
    console.log(x3); //901
    console.log(x4); //error

    {
      var t4 = 783;
      let f4 = 903;
      const x4 = 358;
      console.log(f1); //90
      console.log(f2); //900
      console.log(f3); //91
      console.log(f4); //904

      console.log(t1); //78
      console.log(t2); //780
      console.log(t3); //781
      console.log(t4); //783

      console.log(x1); //80
      console.log(x2); //800
      console.log(x3); //901
      console.log(x4); //358
    }
  }
}

      console.log(f1); //90
      console.log(f2); //error
      console.log(f3); //error
      console.log(f4); //error

      console.log(t1); //78
      console.log(t2); //780
      console.log(t3); //781
      console.log(t4); //783

      console.log(x1); //80
      console.log(x2); //error
      console.log(x3); //error
      console.log(x4); //error
