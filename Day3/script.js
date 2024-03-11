const inputs = document.querySelectorAll('.controls input');

    function handleUpdate(){
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    input.forEach(input => {
      addEventListener('change', handleUpdate);
      addEventListener('mousemove', handleUpdate);
    });
