(function() {
        try {
          var saved = localStorage.getItem('portfolio-theme');
          if (saved === 'light') {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
          } else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
          }
        } catch (e) {
          document.documentElement.classList.add('dark');
        }
      })();
