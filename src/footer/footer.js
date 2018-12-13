import React from 'react';

function Input (props) {
	return (<input type='button' className='input' id={props.id} value={props.value} />)
}

function Div () {
	return (<div className="data"><h3> id :</h3><h3>{props.value}</h3></div>)
}

$(document).ready(()=> {
  $("#provider").on("click", (data) => {
    $.get(
        'https://api.2ip.ua/provider.json?ip=',

        function Provider(data) {
           localStorage.setItem('inner', data);
           console.log(data);
          return ( <Div provider={data.value} />);
        }
      )
  })
})

function Footer() {
	return <div className="footer">
	<Input value="Провайдер" id='provider' />
	</div>
}

export default Footer
