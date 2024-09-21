import { style } from "@vanilla-extract/css";

//loginPage
export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f9f9f9',
});

export const loginBox = style({
  border: '1px solid #007bff',
  borderRadius: '10px',
  padding: '2rem',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '400px',
  textAlign: 'center',
});

export const inputStyle = style({
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ddd',
  borderRadius: '5px',
  fontSize: '16px',
});

export const buttonStyle = style({
  width: '100%',
  padding: '10px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px 0',
  fontSize: '16px',
});

export const socialLogin = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '20px',
});

export const socialButton = style({
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
});

export const googleButton = style({
  backgroundColor: '#ea4335',
  color: '#000000',
});

export const kakaoButton = style({
  backgroundColor: '#fee500',
  color: '#000000',
});

export const naverButton = style({
  backgroundColor: '#1ec800',
  color: '#fff',
});

