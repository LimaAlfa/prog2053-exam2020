import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }
  render() {
    return html`
      <form id="editUser">
        <label for="usname">Username</label>
        <input type="text" name="username" id="username">
        <br>
        <button @click="${this.changeUser}">Change User</button>    
      </form>
    `;
  }

  // din kode her

}
function changeUser(e){
  fetch('../api/updateUser.php',{
    method: 'POST',
  })
}
customElements.define('edit-user', EditUser);
