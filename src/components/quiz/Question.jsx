import React, {Component} from 'react';

class Question extends Component{

	onChange(e){
		//event delegation
		e.preventDefault();	
		//pulling out the stuff we need 
		const { setCurrent, setScore, question } = this.props;
		//get the question number 
		const selected = e.target.value;

		//check to see if the user answered the question correctly
		if(selected == question.correct){
			setScore(this.props.score+1);
		}
		//update current question to diaplay next one
		setCurrent(this.props.current + 1);

	}

	render(){
		const {question} = this.props;
		return(
			<div className = "well">
				<h3>{question.text}</h3>
				<hr />
				<ul className= 'list-group'>
					{
						this.props.question.choices.map(choice => {
							return(
								<li className = 'list-group-item' key = {choice.id}>
									{choice.id} <input type= "radio" onChange = {this.onChange.bind(this)} name={question.id} value={choice.id} /> {choice.text}
								</li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default Question