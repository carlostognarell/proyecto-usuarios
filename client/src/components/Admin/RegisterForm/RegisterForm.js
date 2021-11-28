import React,{useState} from 'react';
import { Form,Input,Button,Checkbox,notification } from 'antd';
import { UserOutlined,LockFilled } from '@ant-design/icons';
import {emailValidation,minlengthValidation,} from '../../../utils/formValidation';
import { signUpApi } from '../../../api/user';

import './RegisterForm.scss'

export default function RegisterForm() {
    const [inputs, setInputs] = useState({
        // name:"Carlos Tognarell",
        // lastname:"Ross",
        email:"",
        password:"",
        repeatPassword:"",
        privacyPolicy:false
    });

    const [formValid, setFormValid] = useState({
        email:false,
        password:false,
        repeatPassword:false,
        privacyPolicy:false
    });
    
    const changeForm = e =>{
        if(e.target.name === "privacyPolicy"){
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            });
        } else{
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
        }
    };

    //Inicio Funciones de Validacion
    const inputValidation = e =>{
        const {type,name} = e.target;
        if (type === "email") {
            setFormValid({
                ...formValid,
                [name]: emailValidation(e.target)
            });           
        }

        if (type === "password") {
            setFormValid({
                ...formValid,[name]: minlengthValidation(e.target,6)
            });   
        }

        if (type === "checkbox") {
            setFormValid({
                ...formValid,
                [name]: e.target.checked
            });   
        }
    };
    //Fin funciones de validacion

    //Inicio Funcion de Registro
    const register = async e => {
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;

        if (!emailVal || !passwordVal || !repeatPasswordVal || !inputs.privacyPolicy) {
            notification['error']({
                message: "Todos los campos son obligatorios."
            });
        }else{
            if (passwordVal !== repeatPasswordVal) {
                notification['error']({
                    message: "Las contraseñas tienen que ser iguales."
                });
            }else{
               const result = await signUpApi(inputs);
               //console.log("ok")
               if(!result.ok){
                notification['error']({
                    message: result.message
                });
               }else{
                notification['success']({
                    message: result.message
                });
                resetForm();
               }
            }
        }
    };
    //Fin Funcion de Registro

    const resetForm = () =>{
        const inputs = document.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++){
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }

        setInputs({
            email:"",
            password:"",
            repeatPassword:"",
            privacyPolicy:false
        });

        setFormValid({  
            email:false,
            password:false,
            repeatPassword:false,
            privacyPolicy:false
        });
    };

    return (
        <Form className="register-form" onFinish={register} onChange={changeForm} >
            <Form.Item>
                <Input prefix={<UserOutlined style={{color:"rgba(0,0,0,.25)"}}></UserOutlined>} 
                type="email" name="email" placeholder="Correo electronico" className="register-form__input"
                onChange={inputValidation}
                value = {inputs.email}>
                </Input>
            </Form.Item>

            <Form.Item>
                <Input prefix={<LockFilled style={{color:"rgba(0,0,0,.25)"}}></LockFilled>}
                type="password" name="password" placeholder="Contraseña" className="register-form__input"
                onChange={inputValidation}
                value={inputs.password}></Input>
            </Form.Item>

            <Form.Item>
                <Input prefix={<LockFilled style={{color:"rgba(0,0,0,.25)"}}></LockFilled>}
                type="password" name="repeatPassword" placeholder="Repetir contraseña" className="register-form__input"
                onChange={inputValidation}
                value={inputs.repeatPassword}></Input>
            </Form.Item>

            <Form.Item>
                <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}  onChange={inputValidation}>
                    He leido y acepto la politica de privacidad.
                </Checkbox>
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}
