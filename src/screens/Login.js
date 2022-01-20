import styled from "styled-components";

import { useForm } from "react-hook-form";

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Wrapper = styled.div`
    max-width: 350px;
    width: 100%;
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 35px 40px 25px 40px;
    margin-bottom: 10px;
    form {
        margin-top: 35px;
        width: 100%;
        display: flex;
        justify-items: center;
        flex-direction: column;
        align-items: center;
    }
`;

const Input = styled.input`
    width: 100%;
    border-radius: 3px;
    padding: 7px;
    background-color: #fafafa;
    border: 0.5px solid
        ${props => (props.hasError ? "tomato" : props.theme.borderColor)};
    margin-top: 10px;
    box-sizing: border-box;

    &::placeholder {
        font-size: 14px;
    }
    & :focus {
        border-color: rgb(38, 38, 38);
    }
`;

const Button = styled.button`
    border: none;
    border-radius: 3px;
    margin-top: 13px;
    background-color: #0095f6;
    color: white;
    text-align: center;
    padding: 8px 0px;
    font-weight: 600;
    width: 100%;
`;

export default function Login() {
    const { register, handleSubmit, formState } = useForm({ mode: "onChange" });

    const fetchLogin = async ({ user_name, user_pw }) => {
        const ok = await fetch(`http://localhost:5000/login`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_name,
                user_pw,
            }),
        }).then(res => res.json());
        return ok;
    };

    const onSubmitValid = async ({ user_name, user_pw }) => {
        const { token, login } = await fetchLogin({ user_name, user_pw });
        console.log(token, login);
    };

    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <form onSubmit={handleSubmit(onSubmitValid)}>
                        <Input
                            ref={register({
                                required: "사용자 이름 넣으소",
                            })}
                            name="user_name"
                            type="text"
                            placeholder="Username"
                        />
                        <Input
                            ref={register({
                                required: "사용자 이름 넣으소",
                            })}
                            name="user_pw"
                            type="text"
                            placeholder="Username"
                        />
                        <Button type="submit" value="로그인">
                            로그인
                        </Button>
                    </form>
                </FormContainer>
            </Wrapper>
        </Container>
    );
}
