// ======= Particles.js config =======
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// ======= Particles count update =======
var count_particles = document.querySelector(".js-count-particles");
var update = function () {
  if (window.pJSDom && window.pJSDom.length > 0 && count_particles) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

// ======= Chart.js pie chart =======
window.addEventListener('DOMContentLoaded', () => {
  gerarDias();

  const ctx = document.getElementById('pieChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Presenças', 'Faltas', 'Domingos'],
      datasets: [{
        data: [17, 1, 2],
        backgroundColor: ['#4caf50', '#f44336', '#ff9800'],
        borderColor: '#fff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: {
              family: 'Rubik',
              size: 14
            }
          }
        },
        title: {
          display: true,
          text: 'Resumo total',
          font: {
            family: 'Rubik',
            size: 18
          }
        }
      }
    }
  });
});

/* particles.js config */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

/* Particles count */
var count_particles = document.querySelector(".js-count-particles");
var update = function () {
  if (window.pJSDom && window.pJSDom.length > 0) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

     const ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Presenças', 'Faltas', 'Domingos'],
        datasets: [{
          data: [18, 1, 3],
          backgroundColor: ['#4caf50', '#f44336', '#ff9800'],
          borderColor: '#fff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                family: 'Rubik',
                size: 14
              }
            }
          },
          title: {
            display: true,
            text: 'Resumo total',
            font: {
              family: 'Rubik',
              size: 18
            }
          }
        }
      }
    });

function filterCards(filter) {
  const cards = document.querySelectorAll('.container .card');
  cards.forEach(card => {
    card.style.display = 'none'; // Esconde todos inicialmente

    if (filter === 'all') {
      card.style.display = 'block';
    } else if (filter === 'present' && card.classList.contains('present')) {
      card.style.display = 'block';
    } else if (filter === 'absent' && card.classList.contains('absent')) {
      card.style.display = 'block';
    } else if (filter === 'sunday' && card.classList.contains('sunday')) {
      card.style.display = 'block';
    }
  });
  updateSummary();
}
