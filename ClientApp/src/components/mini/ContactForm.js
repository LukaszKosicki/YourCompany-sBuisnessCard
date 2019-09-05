import React from "react";
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            fullName: {
                value: "",
                valid: false,
                invalid: false,
                statemant: ""
            },
            email: {
                value: "",
                valid: false,
                invalid: false,
                statemant: "",
                reg: /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i
            },
            phone: {
                value: "",
                valid: false,
                invalid: false,
                statemant: ""
            },
            subject: {
                value: "",
                valid: false,
                invalid: false,
                statemant: ""
            },
            content: {
                value: "",
                valid: false,
                invalid: false,
                statemant: ""
            }
        };
    }

    checkBox = (e) => {
        if (e.target.checked) {
            this.setState({
                disabled: false
            });
        } else {
            this.setState({
                disabled: true
            });
        }
    }

    handleChange = event => {
        var valid = false;
        var invalid = false;
        var statemant = "";

        if (event.target.id === "email") {
            if (this.state[event.target.id].reg.test(event.target.value)) {
                valid = true;
                invalid = false;
            } else {
                valid = false;
                invalid = true;
                statemant = "Wprowadź prawidłowy adres e-mail!";
            }
        } else {
            if (event.target.value.length > 0) {
                valid = true;
                invalid = false;
            } else {
                valid = false;
                invalid = true;
            }
        }

        this.setState({
            [event.target.id]: {
                ...this.state[event.target.id],
                value: event.target.value,
                valid: valid,
                invalid: invalid,
                statemant: statemant
            }
        });
    }

    sendForm = () => {
        if (this.state.fullName.valid === true && this.state.email.valid === true &&
            this.state.subject.valid === true && this.state.phone.valid === true && this.state.content.valid === true) {
            var form = {
                fullName: this.state.fullName.value,
                email: this.state.email.value,
                phoneNumber: this.state.phone.value,
                title: this.state.subject.value,
                content: this.state.content.value
            };

            fetch("/ContactForm/SendForm/", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(res => console.log(res));
        } else {
            var statemant = "Uzupełnij poprawnie to pole!";
            var fields = ["fullName", "email", "phone", "subject", "content"];
            fields.forEach((value) => {
                if (this.state[value].valid === false) {
                    this.setState({
                        [value]: {
                            invalid: true,
                            statemant: statemant
                        }
                    });
                }
            })
        }
    }

    render() {
        var btnDiv = {
            textAlign: "center"
        };

        var formDiv = {
            textAlign: "left"
        };

        return (
            <Form>
                <h3>Formularz kontaktowy</h3>
                <div style={formDiv}>
                    <FormGroup>
                        <Label for="fullName">Imie i nazwisko:</Label>
                        <Input valid={this.state.fullName.valid} invalid={this.state.fullName.invalid}
                            onChange={this.handleChange} type="text" id="fullName" />
                        <FormFeedback>{this.state.fullName.statemant}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input valid={this.state.email.valid} invalid={this.state.email.invalid}
                            onChange={this.handleChange} type="text" id="email" />
                        <FormFeedback>{this.state.email.statemant}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="phone">Telefon:</Label>
                        <Input valid={this.state.phone.valid} invalid={this.state.phone.invalid}
                            onChange={this.handleChange} type="text" id="phone" />
                        <FormFeedback>{this.state.phone.statemant}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="subject">Temat:</Label>
                        <Input valid={this.state.subject.valid} invalid={this.state.subject.invalid}
                            onChange={this.handleChange} type="text" id="subject" />
                        <FormFeedback>{this.state.subject.statemant}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="content">Treść:</Label>
                        <Input valid={this.state.content.valid} invalid={this.state.content.invalid}
                            onChange={this.handleChange} type="textarea" id="content" />
                        <FormFeedback>{this.state.content.statemant}</FormFeedback>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input onClick={this.checkBox} type="checkbox" />
                            Check me out
                        </Label>
                    </FormGroup>
                </div>
                <div style={btnDiv}>
                    <Button onClick={this.sendForm} disabled={this.state.disabled}>Submit</Button>
                </div>
            </Form>
            );
    }
}