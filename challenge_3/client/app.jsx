class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: true,
      f1: false,
      f2: false,
      confirmation: false,
      information: [],
      displayData: [],
    };
  }

  handleCheckout() {
    this.setState({
      checkout: false,
      f1: true,
    });
  }

  handleF1Click(input) {
    this.setState({
      f1: false,
      f2: true,
    })
    let keys = Object.keys(input);
    for (let i = 0; i < keys.length; i += 1) {
      let obj = {};
      obj[keys[i]] = input[keys[i]];
      this.state.information.push(obj);
    }
  }

  handleF2Click(input) {
    this.setState({
      f2: false,
      f3: true,
    })
    let keys = Object.keys(input);
    for (let i = 0; i < keys.length; i += 1) {
      let obj = {};
      obj[keys[i]] = input[keys[i]];
      this.state.information.push(obj);
    }
  }

  handleF3Click(input) {
    this.setState({
      f3: false,
      confirmation: true,
    })
    let keys = Object.keys(input);
    for (let i = 0; i < keys.length; i += 1) {
      let obj = {};
      obj[keys[i]] = input[keys[i]];
      this.state.information.push(obj);
    }
    this.send(JSON.stringify(this.state.information));
  }

  handlePurchaseClick() {
    this.setState({
      confirmation: false,
      checkout: true,
    });
  }

  send(input) {
    $.ajax({
      type: 'POST',
      url: '/',
      data: input,
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          displayData: data,
        });
        console.log('data sent');
      },
      error: (error) => {
        console.log('error: ', error)
      }
    });
  }

  render() {
    let button;
    if (this.state.checkout) {
      button = 
        <div>
          <button 
          id="checkout" 
          onClick={this.handleCheckout.bind(this)}
          >Checkout
          </button>
        </div>
    };

    let f1;
    if (this.state.f1) {
      f1 = <F1 handleF1Click={this.handleF1Click.bind(this)}/>
    };

    let f2;
    if (this.state.f2) {
      f2 = <F2 handleF2Click={this.handleF2Click.bind(this)}/>
    }

    let f3;
    if (this.state.f3) {
      f3 = <F3 handleF3Click={this.handleF3Click.bind(this)}/>
    }

    let confirmation;
    if (this.state.confirmation) {
      confirmation = 
        <ConfirmationList 
          displayData={this.state.displayData} 
          handlePurchaseClick={this.handlePurchaseClick.bind(this)} 
        />
    }

    return (
      <div>
        {button}
        {f1}
        {f2}
        {f3}
        {confirmation}
      </div>
    );
  }
}

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div id="f1">
        <form>
          <div>
            <label>Name: </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Email: </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              onChange={this.handleInputChange}/>
          </div>
          <div>
            <label>Password: </label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              onChange={this.handleInputChange}/>
          </div>
        </form>
        <div className="button">
          <button 
            type="submit" 
            onClick={(e) => this.props.handleF1Click(this.state)}
          >Next</button>
        </div>
      </div>
    );
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address_line1: '',
      address_line2: '',
      address_city: '',
      address_state: '',
      zipcode: 0,
      phone: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div id="f2">
        <form>
          <div>
            <label>Address Line 1: </label>
            <input 
              type="text" 
              id="address_line1" 
              name="address_line1"
              onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Address Line 2: </label>
            <input 
              type="text" 
              id="address_line2" 
              name="address_line2"
              onChange={this.handleInputChange} />
          </div>
          <div>
            <label>City: </label>
            <input 
            type="text" 
            id="address_city" 
            name="address_city" 
            onChange={this.handleInputChange}/>
          </div>
          <div>
            <label>State: </label>
            <input 
              type="text" 
              id="address_state" 
              name="address_state"
              onChange={this.handleInputChange} />
          </div>
          <div>
            <label>Zip Code: </label>
            <input 
              type="number" 
              id="address_zipcode" 
              name="zipcode" 
              onChange={this.handleInputChange}/>
          </div>
          <div>
            <label>Phone: </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              onChange={this.handleInputChange}/>
          </div>
        </form>
        <div className="button">
          <button 
            type="submit" 
            onClick={(e) => this.props.handleF2Click(this.state)}
          >Next</button>
        </div>
      </div>
    );
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cc: 0,
      expirydate: '',
      cvv: 0,
      billing_zipcode: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div id="f3">
        <form>
          <div>
            <label>Credit Card Number: </label>
            <input 
              type="number" 
              id="cc" 
              name="cc" 
              onChange={this.handleInputChange}/>
          </div>
          <div>
            <label>Expiration Date: </label>
            <input 
              type="text" 
              id="expirydate" 
              name="expirydate" 
              onChange={this.handleInputChange}/>
          </div>
          <div>
            <label>CVV: </label>
            <input 
              type="number" 
              id="cvv" 
              name="cvv" 
              onChange={this.handleInputChange}/>
          </div>
          <div>
            <label>Billing Zip Code: </label>
            <input 
              type="number" 
              id="billing_zipcode" 
              name="billing_zipcode" 
              onChange={this.handleInputChange}/>
          </div>
        </form>
        <div className="button">
          <button 
            type="submit" 
            onClick={(e) => this.props.handleF3Click(this.state)}
          >Next</button>
        </div>
      </div>
    );
  }
}

const ConfirmationList = (props) => (
  <div id="confirmation">
    {props.displayData.map(field => 
    <ConfirmationField
      field={field}
      key={field}
    />)}
    <button
      type="submit"
      onClick={props.handlePurchaseClick}
    >Purchase</button>
  </div>
)

const ConfirmationField = ({field}) => (
  <div>
    {console.log('field: ', field)}
    {Object.keys(field)[0]}: {field[Object.keys(field)[0]]}
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))