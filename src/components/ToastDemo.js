import React, { Component } from "react";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

export class ToastDemo extends Component {
  constructor(props) {
    super(props);
    this.showSuccess = this.showSuccess.bind(this);
    this.showSticky = this.showSticky.bind(this);
  }

  showSuccess() {
    this.toast.show({
      severity: "success",
      summary: "Success Message",
      detail: "Message Content",
      life: 3000,
    });
  }

  showSticky() {
    this.toast.show({
      severity: "info",
      summary: "Sticky Message",
      detail: "Message Content",
      sticky: true,
    });
  }

  showConfirm() {
    this.toastBC.show({
      severity: "warn",
      sticky: true,
      content: (
        <div className="p-flex p-flex-column" style={{ flex: "1" }}>
          <div className="p-text-center">
            <i
              className="pi pi-exclamation-triangle"
              style={{ fontSize: "3rem" }}
            ></i>
            <h4>Are you sure?</h4>
            <p>Confirm to proceed</p>
          </div>
          <div className="p-grid p-fluid">
            <div className="p-col-6">
              <Button type="button" label="Yes" className="p-button-success" />
            </div>
            <div className="p-col-6">
              <Button type="button" label="No" className="p-button-secondary" />
            </div>
          </div>
        </div>
      ),
    });
  }

  showMultiple() {
    this.toast.show([
      {
        severity: "info",
        summary: "Message 1",
        detail: "Message 1 Content",
        life: 3000,
      },
      {
        severity: "info",
        summary: "Message 2",
        detail: "Message 2 Content",
        life: 3000,
      },
      {
        severity: "info",
        summary: "Message 3",
        detail: "Message 3 Content",
        life: 3000,
      },
    ]);
  }

  clear() {
    this.toast.clear();
  }

  render() {
    return (
      <div>
        <Toast ref={(el) => (this.toast = el)} />
        <Toast ref={(el) => (this.toastTL = el)} position="top-left" />
        <Toast ref={(el) => (this.toastBL = el)} position="bottom-left" />
        <Toast ref={(el) => (this.toastBR = el)} position="bottom-right" />
        <Toast ref={(el) => (this.toastBC = el)} position="bottom-center" />

        <div className="card toast-demo">
          <Button
            label="Success"
            className="p-button-success"
            onClick={this.showSuccess}
          />
          <Button onClick={this.showSticky} label="Sticky" />
        </div>
      </div>
    );
  }
}
