import React from 'react';
import mui from 'material-ui';
// import CreateUser from './create/int/CreateUser.jsx';
import CreateApproval from './create/int/CreateApproval.jsx';
import CreateBoards from './create/int/CreateBoards.jsx';
import CreateCompany from './create/int/CreateCompany.jsx';
import CreateEmployee from './create/int/CreateEmployee.jsx';
import CreateEvent from './create/int/CreateEvent.jsx';
import CreateKpi from './create/int/CreateKpi.jsx';
import CreateNotification from './create/int/CreateNotification.jsx';
import CreateOpps from './create/int/CreateOpps.jsx';
import CreatePage from './create/int/CreatePage.jsx';
import CreatePost from './create/int/CreatePost.jsx';
import CreateProductCats from './create/int/CreateProductCats.jsx';
import CreateProducts from './create/int/CreateProducts.jsx';
import CreateRole from './create/int/CreateRole.jsx';
import CreateSite from './create/int/CreateSite.jsx';
import CreateTeam from './create/int/CreateTeam.jsx';
import CreateTags from './create/int/CreateTags.jsx';
import CreateTasks from './create/int/CreateTasks.jsx';
import CreateTodos from './create/int/CreateTodos.jsx';
import ItemCard from './ItemCard.jsx';
import CreateItem from './create/int/CreateItem.jsx';
import CreateTodo from './create/int/CreateTodo.jsx';



let ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({


  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <section style={{width: '300px', margin: '0 auto', padding: '100px 0'}}>

<CreateTodo/>

      </section>
    );
  }

});
