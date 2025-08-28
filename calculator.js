document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  let expression = '';

  const updateDisplay = () => display.value = expression || '0';

  // Numbers
  document.querySelectorAll('[data-num]').forEach(btn => {

    btn.addEventListener('click', () => {

      expression += btn.dataset.num;
      updateDisplay();

    });
  });

  // Operators (+, -, *, /)
  document.querySelectorAll('[data-op]').forEach(btn => {

    btn.addEventListener('click', () => {

      if (!expression) return;
      if (/[+\-*/%]$/.test(expression)) expression = expression.slice(0, -1);
      expression += btn.dataset.op;
      updateDisplay();

    });
  });

  // Equals
  document.getElementById('equals').addEventListener('click', () => {

    if (!expression) return;
    try {

      expression = eval(expression).toString();

    } catch {

      expression = 'Error';

    }

    updateDisplay();
  });

  // AC
  document.getElementById('ac').addEventListener('click', () => {

    expression = '';
    updateDisplay();

  });

  // +/- (negate last number)
  document.getElementById('sign').addEventListener('click', () => {

    expression = expression.replace(/(\d+\.?\d*)$/, n => (-parseFloat(n)).toString());
    updateDisplay();

  });

  // % (modulo)
  document.getElementById('percent').addEventListener('click', () => {

    if (!expression || /[+\-*/%]$/.test(expression)) return;
    expression += '%';
    updateDisplay();
    
  });

  updateDisplay();
});
