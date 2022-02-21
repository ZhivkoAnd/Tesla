import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import Opacity from "./Opacity";

const Support = () => {
  return (
    <div className="page">
      <Opacity />
      <Header />
      <div>
        <div className="letter backgroundsupport">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="signuphead" style={{ marginLeft: "5px" }}>
              Contact us
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="container formbg">
        <form id="contact-form" method="post" action="contact.php">
          <div className="messages"></div>

          <div className="controls">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_name">Име</label>
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Напишете своето име *"
                    required="required"
                    data-error="Въведете име."
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_lastname">Фамилия</label>
                  <input
                    id="form_lastname"
                    type="text"
                    name="surname"
                    className="form-control"
                    placeholder="Напишете своята фамилия *"
                    required="required"
                    data-error="Въведете фамилия."
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_email">Е-мейл</label>
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Напишете своят Е-мейл *"
                    required="required"
                    data-error="Нужен е валиден Е-мейл."
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="form_need">Категория</label>
                  <select
                    id="form_need"
                    name="need"
                    className="form-control"
                    required="required"
                    data-error="Моля изберете категория."
                  >
                    <option value="">Напишете своят Е-мейл</option>
                    <option value="Treatment">Лечение</option>
                    <option value="Symptoms">Симптоми</option>
                    <option value="Free Hours">Свободни часове</option>
                    <option value="Other">Други</option>
                  </select>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="form_message">Съобщение</label>
                  <textarea
                    id="form_message"
                    name="message"
                    className="form-control"
                    placeholder="Напишете своето съобщение *"
                    rows="4"
                    required="required"
                    data-error="Моля, оставете съобщение."
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-12">
                <input
                  type="submit"
                  className="btn btn-default btn-send"
                  value="Изпрати"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="text-muted" />
                {/* <strong>*</strong> Тези полета са задължителни.</p>     */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;
