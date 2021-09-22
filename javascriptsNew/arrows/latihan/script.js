const spotify = [
  {
    penyanyi: ' taylor swift',
    judul: 'balnk sapace',
  },
  {
    penyanyi: ' ariana',
    judul: 'beauty and the beast',
  },
  {
    penyanyi: ' marron 5',
    judul: 'maps',
  },
  {
    penyanyi: ' taylor swift',
    judul: 'lover',
  },
];

const listpenyanyi = `<h1>spotify</h1>


${spotify
  .map(
    (list) =>
      `<ul class="">
    <li class="">${list.penyanyi}</li>
    <li class="">${list.judul}</li>
  </ul>`
  )
  .join('')}`;

x = document.querySelector('.spotify');
x.innerHTML = listpenyanyi;
