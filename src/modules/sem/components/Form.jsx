/* eslint-disable react/jsx-key */
import React from 'react'

export default function Form(props) {

  const { formPhonePlaceholderText, formNamePlaceholderText, cityPickerHeaderText, cities, 
    moreCitySelectorCtaText, formButtonCtaText } = props;

  return (
    <form>
      <input type="text" placeholder={formNamePlaceholderText} 
        style={{width: "100%", display: "block", padding: "15px", borderRadius: "8px"}} />
      <input type="phone" placeholder={formPhonePlaceholderText} 
        style={{width: "100%", display: "block", marginTop: "20px", padding: "15px", borderRadius: "8px"}} />

      <p>{cityPickerHeaderText}</p>

      <div style={{display: "flex", flexWrap: "wrap"}}>

      {
        cities.map(({ fields }, index) => {
        // console.log("🚀 ~ file: Form.jsx ~ line 20 ~ cities.map ~ fields", fields)

          return ( <span key={index} style={{flex: "33%"}}>
            <input type="radio" id={fields.name} />
            <label htmlFor={fields.name}>{fields.name}</label>
            </span>
          )
        })
      }

      <p style={{textDecoration: "underline"}}>{moreCitySelectorCtaText}</p>
      </div>

      <button style={{width: "100%", background: "#28328c", borderRadius: "8px", color: "white", padding: "16px"}}>{formButtonCtaText}</button>
    </form>
  )
}
