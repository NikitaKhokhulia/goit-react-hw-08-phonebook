"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[896],{2896:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(2791),a=n(9434),s=n(4270),c=n(3634),u="ContactsForm_form__1Y65-",i="ContactsForm_input__UjXFK",o="ContactsForm_button__zuUB3",l=n(184),m=function(){var e=(0,a.I0)();return(0,l.jsxs)("form",{className:u,onSubmit:function(t){t.preventDefault();var n={name:t.currentTarget.name.value,number:t.currentTarget.number.value};if(""!==n)return e((0,c.uK)(n)),void t.currentTarget.reset();alert("Task cannot be empty. Enter some text!")},children:[(0,l.jsxs)("label",{children:["Name",(0,l.jsx)("input",{className:i,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("label",{children:["Number",(0,l.jsx)("input",{className:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)("button",{type:"submit",className:o,children:"Add contact"})]})},d=function(e){return e.contacts.items},f=function(e){return e.filter},h="ContactList_list__csErn",p=function(){var e=(0,a.I0)(),t=(0,a.v9)(d),n=(0,a.v9)(f),r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,l.jsx)("ul",{className:h,children:r.map((function(t){var n=t.name,r=t.number,a=t.id;return(0,l.jsxs)("li",{children:[n," ",r,(0,l.jsx)("button",{onClick:function(){return e((0,c.GK)(a))},children:"Delete"})]},a)}))})},_=n(4808),x="Filter_input__N7T3z",b=function(){var e=(0,a.I0)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("input",{className:x,onChange:function(t){e((0,_.W)(t.target.value))},type:"text",name:"filter"})})};function j(){var e=(0,a.I0)();return(0,r.useEffect)((function(){e((0,c.yF)())}),[e]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.q,{children:(0,l.jsx)("title",{children:"Contacts"})}),(0,l.jsx)(m,{}),(0,l.jsx)(b,{}),(0,l.jsx)(p,{})]})}}}]);
//# sourceMappingURL=896.4266765c.chunk.js.map