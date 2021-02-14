var FilteredList = React.createClass({ displayName: "FilteredList",
  filterList: function (event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item.toLowerCase().search(
      event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: updatedList });
  },
  getInitialState: function () {
    return {
      initialItems: [
      {
        id: 1,
        emoji: "💪",
        name: "Tense Biceps",
        meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym." },

      {
        id: 2,
        emoji: "🙏",
        name: "Person With Folded Hands",
        meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you." },

      {
        id: 3,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“." }],


      items: [] };

  },
  componentWillMount: function () {
    this.setState({ items: this.state.initialItems });
  },
  render: function () {
    return (
      React.createElement("div", { className: "filter-list" },
      React.createElement("form", null,
      React.createElement("fieldset", { className: "form-group" },
      React.createElement("input", { type: "text", className: "form-control form-control-lg", placeholder: "Search", onChange: this.filterList }))),


      React.createElement(List, { items: this.state.items })));


  } });


var List = React.createClass({ displayName: "List",
  render: function () {
    return (
      React.createElement("ul", { className: "list-group" },

      this.props.items.map(function (item) {
        return React.createElement("li", { className: "list-group-item", "data-category": item, key: item }, item);
      })));



  } });


React.render(React.createElement(FilteredList, null), document.getElementById('app'));