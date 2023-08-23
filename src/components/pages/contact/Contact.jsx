import React, { useState, useEffect } from "react";
import StartingBanner from "../../forAll/StartingBanner";
import SnackBar from "../../forAll/SnackBar";
import ProgressIndicator from "../../forAll/ProgressIndicator";
import Button from "@mui/material/Button";

import { lazy } from "react";
const LinksSection = lazy(() => import("../../forAll/LinksSection"));

const inputObj = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [inputValues, setInputValues] = useState(inputObj);
  const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "bottom ",
    horizontal: "center",
  });
  const [alertMessage, setAlertMessage] = useState({
    successMessage: "asdfads",
    failedMessage: "",
  });
  const handleClick = (newState) => () => {
    setSnackBarState((prev) => ({ ...prev, open: true }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputValues));
    setIsSubmit(true);
  };
  const postRequestFunc = async () => {
    // const d =
    //     formInput &&
    //     formInput.date;
    // const month = Number(d.getMonth()) + 1;
    // const displayDate = d.getFullYear() + "-" + month + "-" + d.getDate();

    // let postStatus;

    // const formData = {
    //     ...formInput,
    //     tour_date: displayDate,
    // };
    // await axios
    //     .post(
    //         import.meta.env.VITE_API_BASE_URL + "/api/package-booking",
    //         formData
    //     )
    //     .then((res) => {
    //         postStatus = res.data.status;
    //     })
    //     .catch((err) => {
    //         postStatus = err.response.status;
    //     });
    setTimeout(() => {
      setInputValues((prev) => ({
        ...prev,
        name: "",
        email: "",
        message: "",
      }));
      setAlertMessage((prev) => ({
        ...prev,
        successMessage: "Your message has been successfully Sent.",
      }));
      setSnackBarState((prev) => ({ ...prev, open: true }));
      handleClick({ vertical: "bottom", horizontal: "center" });

      setEmailSubmitting(false);
      // setOpen(true);
    }, 3000);
    // const m =
    //     postStatus === 200
    //         ? "You have Booked your tour Successfully."
    //         : "Unfortunately Booking Failed. please try again later";

    // setSpinnerClassName("none");

    // postStatus === 200
    //     ? Swal.fire({
    //           position: "center",
    //           icon: "success",
    //           title: m,
    //           showConfirmButton: false,
    //           timer: 1500,
    //       })
    //     : Swal.fire({
    //           position: "center",
    //           icon: "error",
    //           title: m,
    //           showConfirmButton: false,
    //           timer: 1500,
    //       });
    // toggleOverlay(false);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setEmailSubmitting(true);
      postRequestFunc();
      setIsSubmit(false);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const validRegex = /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/;
    if (!values.name) {
      errors.name = "This field is required.";
    }
    if (!values.email) {
      errors.email = "This field is required.";
    } else if (!values.email.match(validRegex)) {
      errors.email = "This is not the valid email format.";
    }
    if (!values.message) {
      errors.message = "This field is required.";
    } else if (values.message.length < 20) {
      errors.message = "Message should be at least 20 characters long.";
    }
    return errors;
  };

  return (
    <>
      <StartingBanner />
      <div className="contact-page">
        <div className="contents">
          <div className="main-section">
            <h1 className="heading">सम्पर्क</h1>
            <div className="text-wrapper">
              <div className="title">सम्पर्क ठेगानाः</div>
              <div className="info">
                बानेश्वर हाइट, रोहिणी मार्ग, घर नम्बर २१५/२३
              </div>
              <div className="info">सम्पर्क नम्बरः ९७७ –०१–४४६४७७९</div>
              <div className="info">इमेल ठेगानाः tpamf93@gmail.com</div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="name" className="label">
                नाम <span className="astrek">*</span>
                <br />
                <input
                  id="name"
                  name="name"
                  value={inputValues.name}
                  className="input"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="validation-error">
                  {formErrors && formErrors.name}
                </span>
              </label>
              <label htmlFor="email" className="label">
                इमेल <span className="astrek">*</span>
                <br />
                <input
                  name="email"
                  id="email"
                  className="input"
                  value={inputValues.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="validation-error">
                  {formErrors && formErrors.email}
                </span>
              </label>
              <label htmlFor="message" className="label">
                सन्देश <span className="astrek">*</span>
                <br />
                <textarea
                  name="message"
                  id="message"
                  value={inputValues.message}
                  className="input"
                  rows="4"
                  cols="50"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="validation-error">
                  {formErrors && formErrors.message}
                </span>
              </label>
              <Button type="submit" className="submit-btn">
                {emailSubmitting ? (
                  <ProgressIndicator className="spinner" sentColor="#fff" />
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
            <div className="desc"></div>
          </div>
          <LinksSection />
        </div>
      </div>
      <SnackBar
        alertMessage={alertMessage}
        snackBarState={snackBarState}
        setSnackBarState={setSnackBarState}
      />
    </>
  );
};

export default Contact;
