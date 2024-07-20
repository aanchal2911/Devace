import React from "react"; 
import './AfterRoom.css' 
import ListItems from "../ListItems/ListItems"; 
 
class AfterRoom extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      items: [], 
      currentItem: { 
        text: "", 
        key: "" 
      } 
    }; 
 
    this.handleChange = this.handleChange.bind(this); 
    this.addItem = this.addItem.bind(this); 
    this.deleteItem = this.deleteItem.bind(this); 
    this.setUpdate = this.setUpdate.bind(this); 
  } 
 
  handleChange(event) { 
    let { value } = event.target; 
    this.setState({ 
      currentItem: { 
        text: value, 
        key: Date.now() 
      } 
    }); 
  } 
 
  addItem(event) { 
    event.preventDefault(); 
    let newItem = this.state.currentItem; 
    if (newItem.text !== "") { 
      const newItems = [...this.state.items, newItem]; 
      this.setState({ 
        items: newItems, 
        currentItem: { 
          text: "", 
          key: "" 
        } 
      }); 
    } 
    console.log(this.state.items); 
  } 
 
  deleteItem(key) { 
    const filteredItem = this.state.items.filter((item, index) => { 
      return item.key !== key; 
    }); 
    this.setState({ 
      items: filteredItem, 
      currentItem: { 
        text: "", 
        key: "" 
      } 
    }); 
  } 
 
  setUpdate(text, key) { 
    const items = this.state.items; 
    items.forEach(item => { 
      if (item.key === key) { 
        item.text = text; 
      } 
    }); 
    this.setState({ 
      items: items 
    }); 
  } 
  render() { 
    return ( 
      <> 
        <div className="relax-container"> 
          <img src='/images/gif2.gif' className='relax-bg' style={{ width: "100%", height: "100%" }} alt=""/> 
          <div className="relax-heading">Relaxation Room</div> 
        </div> 
        <div className="lower-container"> 
          <div className='lower-container-left'> 
            <div className='lower-left1'> 
              <p className="lower-left1-head">LOFI</p> 
              <iframe width="300" height="215" className="lower-left1-img" src="https://www.youtube.com/embed/_ITiwPMUzho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </div> 
            <div className='lower-left2'> 
              <p className="lower-left2-head">POMODORO</p> 
              <iframe width="300" height="215" className="lower-left2-img" src="https://www.youtube.com/embed/cPtXhWnqzAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </div> 
          </div> 
          <div className='lower-container-right'> 
            <h1 className="to-do-head center">My To-Do List</h1> 
            <div className="to-do"> 
              <div className="todo-input-bar"> 
                <form id="to-do-form" onSubmit={this.addItem}> 
                  <input type="text" id="myInput" placeholder="Title..." value={this.state.currentItem.text} 
                    onChange={this.handleChange} /> 
                  <button class="addBtn" type="submit">Add</button> 
                </form> 
              </div> 
            </div> 
            <div className="todo-list"> 
              <ListItems 
                items={this.state.items} 
                deleteItem={this.deleteItem} 
                setUpdate={this.setUpdate} 
              /> 
            </div> 
          </div> 
        </div> 
      </> 
    ) 
  } 
} 
 
export default AfterRoom;