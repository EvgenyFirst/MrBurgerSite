// acco team

var panelItem = document.querySelectorAll('.panel-title'),
  bodyItem = document.querySelectorAll('.panel-body');
panelItem.__proto__.forEach = [].__proto__.forEach;

var activePanel;
panelItem.forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    //show new thingy;
    this.classList.add('panel-active');
    this.nextElementSibling.classList.add('active'); 
    //hide old thingy
    if (activePanel) {
      activePanel.classList.remove('panel-active');
      activePanel.nextElementSibling.classList.remove('active');
    }
    //update thingy
    activePanel = (activePanel === this) ? 0 : this;
  });
});


// acco menu

var panelItem = document.querySelectorAll('.panel-title-menu'),
  bodyItem = document.querySelectorAll('.panel-body-menu');
panelItem.__proto__.forEach = [].__proto__.forEach;

var activePanel;
panelItem.forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    //show new thingy;
    this.classList.add('panel-active-menu');
    this.nextElementSibling.classList.add('active-menu');
    //hide old thingy
    if (activePanel) {
      activePanel.classList.remove('panel-active-menu');
      activePanel.nextElementSibling.classList.remove('active-menu');
    }
    //update thingy
    activePanel = (activePanel === this) ? 0 : this;
  });
});