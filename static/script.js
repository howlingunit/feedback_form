async function handleForm(e) {
  e.preventDefault();

  const values = {
    email : e.target.email.value,
    site : e.target.site.value,
    feedback : e.target.feedback.value
  };


  let res = await fetch('/send', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(values),
  });

  res = await res.json();

  console.log(res)

}

const form = document.querySelector('#form');
form.addEventListener('submit', handleForm);

