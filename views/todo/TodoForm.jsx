import React, { Component } from 'react';
//import style from './style';
import DocumentTitle from 'react-document-title';
import axios from 'axios';

export default class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { date: '', category: '', type: '', amount: '' };
		this.change = this.change.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	change(e) {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	handleSubmit(e) {
		e.preventDefault();
		const {date, category, type, amount } = this.state;

		axios.post('/todo/todos', { date, category, type, amount })
			.then(result => {
				console.log("/todos post calll made: ", result);
			});
	}

	render() {

		const { date, type, category, amount } = this.state;

		return (
			<DocumentTitle title="Todo Form">
			<div>
           		 <h1> Add Todo</h1>
           		 <form  onSubmit={ this.handleSubmit }>

           		     <div className="form-group">
           		         <label for="datetimepicker1">Date</label>
           		         <div className='input-group date' id='datetimepicker1'>
           		             <input type='date' name="date" className="form-control" onChange={this.change} />
           		             <span className="input-group-addon">
           		             <span className="glyphicon glyphicon-calendar"></span>
           		         </span>
           		         </div>
           		     </div>


           		     <div className="form-group">
           		         <label for="category">Category</label>
           		         <select className="form-control" id="category" name="category" onChange={this.change} >
           		             <option value="">Select</option>
           		             <option value="cat1">Cat1</option>
           		             <option value="cat2">Cat2</option>

           		         </select>
           		     </div>

           		     <div className="form-group">
           		         <label for="type">Type</label>
				 <label for="cash">Cash</label>
           		         <input type="radio" className="form-control" id="type1" name="type" value="cash" placeholder="Type" onChange={this.change}/>
				 <label for="credit">Credit</label>
           		         <input type="radio" className="form-control" id="type2" name="type" value="credit" placeholder="Type" onChange={this.change}/>
           		     </div>
           		     
			     <div className="form-group">
           		         <label for="amount">Amount</label>
           		         <input type="amount" className="form-control" 
           		          id="amount" 
				  name="amount"
           		          aria-describedby="Amount" 
           		          placeholder="Amount"
				  onChange={this.change}/>
           		     </div>

           		     <button type="submit" className="btn btn-primary">Submit</button>
           		 </form>
           		</div>
			</DocumentTitle>
		)

	}

}


