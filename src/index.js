function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', "by Lachlan", "version 1.000"], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());