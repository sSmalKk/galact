var modoEscuro = false;

  function toggleMode() {
    if (!modoEscuro) {
      // Alternar para cores escuras
      document.documentElement.style.setProperty('--cor-primaria', 'var(--cor-darkprimaria)');
      document.documentElement.style.setProperty('--cor-secundaria', 'var(--cor-darksecundaria)');
      document.documentElement.style.setProperty('--cor-terciaria', 'var(--cor-darkterciaria)');
      document.documentElement.style.setProperty('--cor-light', 'var(--cor-darklight)');
      document.documentElement.style.setProperty('--cor-dark', 'var(--cor-darkdark)');
      document.documentElement.style.setProperty('--cor-dark2', 'var(--cor-darkdark1)');

      modoEscuro = true;
    } else {
      // Alternar para cores claras
      document.documentElement.style.setProperty('--cor-primaria', 'var(--cor-lightprimaria)');
      document.documentElement.style.setProperty('--cor-secundaria', 'var(--cor-lightsecundaria)');
      document.documentElement.style.setProperty('--cor-terciaria', 'var(--cor-lightterciaria)');
      document.documentElement.style.setProperty('--cor-light', 'var(--cor-lightlight)');
      document.documentElement.style.setProperty('--cor-dark', 'var(--cor-lightdark)');
      document.documentElement.style.setProperty('--cor-dark2', 'var(--cor-lightdark1)');

      modoEscuro = false;
    }
    
  }


