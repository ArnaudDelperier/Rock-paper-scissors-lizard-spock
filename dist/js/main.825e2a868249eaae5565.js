(self.webpackChunkshifumilizardspockv2=self.webpackChunkshifumilizardspockv2||[]).push([[179],{1937:(e,t,r)=>{"use strict";var l=r(7294),a=r(3727),n=r(3935),c=(r(9753),r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038),r(5977)),s=(r(1249),r(5697)),m=r.n(s),i=function(e){var t=e.click,r=e.values;return l.createElement("div",{className:"buttons-container"},r.map((function(e){return l.createElement("button",{className:e,key:e,type:"button",onClick:function(){return t(e)}}," ",e)})))};i.propTypes={click:m().func.isRequired,values:m().arrayOf(m().string.isRequired).isRequired};const u=i;var o=function(e){var t=e.name,r=e.score,a=e.signChosen;return l.createElement("div",null,"joueur"===t?l.createElement(l.Fragment,null,l.createElement("div",{className:"score"},"Player : ",r),l.createElement("div",{className:"sign-style ".concat(a)},""===a&&"?")):l.createElement(l.Fragment,null,l.createElement("div",{className:"sign-style ".concat(a)},""===a&&"?"),l.createElement("div",{className:"score"}," Computer : ",r)))};o.propTypes={name:m().string.isRequired,score:m().number.isRequired,signChosen:m().string.isRequired};const p=o;var E=function(e){var t=e.result;return l.createElement("div",{className:"result"}," ",t)};E.propTypes={result:m().string.isRequired};const d=E,f=r.p+"images/8d1b4feacd71dbd345319cc6d4939892.jpg";const v=function(){return l.createElement("div",{className:"rules"},l.createElement("img",{className:"rules__img",alt:"",src:f}),l.createElement("ul",{className:"rules__list"},l.createElement("li",{className:"rules__list__item"},"Les ",l.createElement("em",null,l.createElement("em",null,"ciseaux"))," coupent le ",l.createElement("em",null,l.createElement("em",null,"papier"))),l.createElement("li",{className:"rules__list__item"},"le ",l.createElement("em",null,l.createElement("em",null,"papier"))," bat la ",l.createElement("em",null,l.createElement("em",null,"pierre"))),l.createElement("li",{className:"rules__list__item"},"la ",l.createElement("em",null,"pierre")," écrase le ",l.createElement("em",null,l.createElement("em",null,"lézard"))),l.createElement("li",{className:"rules__list__item"},"le ",l.createElement("em",null,"lézard")," empoisonne ",l.createElement("em",null,"Spock")),l.createElement("li",{className:"rules__list__item"},l.createElement("em",null,"Spock")," écrabouille les ",l.createElement("em",null,"ciseaux")),l.createElement("li",{className:"rules__list__item"},"les ",l.createElement("em",null,"ciseaux")," décapitent le ",l.createElement("em",null,"lézard")),l.createElement("li",{className:"rules__list__item"},"le ",l.createElement("em",null,"lézard")," mange le ",l.createElement("em",null,"papier")),l.createElement("li",{className:"rules__list__item"},"le ",l.createElement("em",null,"papier")," repousse ",l.createElement("em",null,"Spock")),l.createElement("li",{className:"rules__list__item"},l.createElement("em",null,"Spock")," détruit la ",l.createElement("em",null,"pierre")),l.createElement("li",{className:"rules__list__item"},"La ",l.createElement("em",null,"pierre")," bat les ",l.createElement("em",null,"ciseaux"))))};const _=function(){var e=(0,c.k6)();return l.createElement("div",{className:"homePageButton-container"},l.createElement("h1",{className:"title"},"Rock ",l.createElement("em",null,".")," Paper ",l.createElement("em",null,".")," Scissors ",l.createElement("em",null,".")," Lizard ",l.createElement("em",null,".")," Spock"),l.createElement("button",{className:"homePageButton",type:"button",onClick:function(){return e.push("/game")}},"Jouer"),l.createElement("button",{className:"homePageButton",type:"button",onClick:function(){return e.push("/rules")}},"Règles"))};var h=r(7625),g=r(1436),k=function(e){var t=e.restart,r=e.current,a=(0,c.k6)();return l.createElement("div",{className:"nav-menu"},"game"===r?l.createElement(l.Fragment,null,l.createElement("div",{className:"rules-icon",onClick:function(){return a.goBack()}},l.createElement(h.G,{icon:g.OFe,size:"3x"})),l.createElement("div",{className:"rules-icon",onClick:function(){return a.push("/rules")}},l.createElement(h.G,{icon:g.sph,size:"3x"})),l.createElement("div",{className:"rules-icon",onClick:t},l.createElement(h.G,{icon:g.UO1,size:"3x"}))):l.createElement("div",{className:"rules-icon",onClick:function(){return a.goBack()}},l.createElement(h.G,{icon:g.OFe,size:"2x"})))};k.propTypes={current:m().string.isRequired,restart:m().func.isRequired};const N=k;function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var l,a,n=[],c=!0,s=!1;try{for(r=r.call(e);!(c=(l=r.next()).done)&&(n.push(l.value),!t||n.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(s)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}var S=["pierre","papier","ciseaux","lézard","Spock"];const z=function(){var e=y((0,l.useState)(0),2),t=e[0],r=e[1],a=y((0,l.useState)(0),2),n=a[0],s=a[1],m=y((0,l.useState)(""),2),i=m[0],o=m[1],E=y((0,l.useState)(""),2),f=E[0],h=E[1],g=y((0,l.useState)(""),2),k=g[0],b=g[1],z=y((0,l.useState)(!1),2),x=z[0],C=z[1],R=function(){r(0),s(0),o(""),h(""),b("")};return(0,l.useEffect)((function(){!function(){var e="";switch(i){case"pierre":"lézard"===f||"ciseaux"===f?(e="Vous remportez la manche !",r(t+1)):"pierre"===f?e="Egalité":(e="Votre adversaire remporte la manche !",s(n+1));break;case"papier":"pierre"===f||"Spock"===f?(e="Vous remportez la manche !",r(t+1)):"papier"===f?e="Egalité":(e="Votre adversaire remporte la manche !",s(n+1));break;case"ciseaux":"papier"===f||"lézard"===f?(e="Vous remportez la manche !",r(t+1)):"ciseaux"===f?e="Egalité":(e="Votre adversaire remporte la manche !",s(n+1));break;case"lézard":"Spock"===f||"papier"===f?(e="Vous remportez la manche !",r(t+1)):"lézard"===f?e="Egalité":(e="Votre adversaire remporte la manche !",s(n+1));break;case"Spock":"pierre"===f||"ciseaux"===f?(e="Vous remportez la manche !",r(t+1)):"Spock"===f?e="Egalité":(e="Votre adversaire remporte la manche !",s(n+1));break;default:e=""}b(e)}()}),[x]),l.createElement("div",{className:"app"},l.createElement(c.AW,{exact:!0,path:"/"},l.createElement(_,null)),l.createElement(c.AW,{path:"/game"},l.createElement(u,{values:S,click:function(e){o(e),h(S[Math.floor(Math.random()*S.length)]),C(!x)}}),l.createElement("div",{className:"score-container"},l.createElement(p,{name:"joueur",score:t,signChosen:i}),l.createElement(d,{result:k}),l.createElement(p,{name:"adversaire",score:n,signChosen:f})),l.createElement(N,{restart:R,current:"game"})),l.createElement(c.AW,{path:"/rules"},l.createElement(v,null),l.createElement(N,{restart:R,current:"rules"})))};var x=l.createElement(a.VK,null,l.createElement(z,null)),C=document.getElementById("root");(0,n.render)(x,C)},9193:()=>{}},e=>{"use strict";var t=t=>e(e.s=t);e.O(0,[555],(()=>(t(9193),t(1937))));e.O()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlmdW1pbGl6YXJkc3BvY2t2Mi8uL3NyYy9jb21wb25lbnRzL0J1dHRvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2hpZnVtaWxpemFyZHNwb2NrdjIvLi9zcmMvY29tcG9uZW50cy9TY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaGlmdW1pbGl6YXJkc3BvY2t2Mi8uL3NyYy9jb21wb25lbnRzL1Jlc3VsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaGlmdW1pbGl6YXJkc3BvY2t2Mi8uL3NyYy9hc3NldHMvaW1hZ2VzL3J1bGVzLmpwZyIsIndlYnBhY2s6Ly9zaGlmdW1pbGl6YXJkc3BvY2t2Mi8uL3NyYy9jb21wb25lbnRzL1J1bGVzL2luZGV4LmpzIiwid2VicGFjazovL3NoaWZ1bWlsaXphcmRzcG9ja3YyLy4vc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2hpZnVtaWxpemFyZHNwb2NrdjIvLi9zcmMvY29tcG9uZW50cy9OYXZNZW51L2luZGV4LmpzIiwid2VicGFjazovL3NoaWZ1bWlsaXphcmRzcG9ja3YyLy4vc3JjL2NvbXBvbmVudHMvQXBwL2luZGV4LmpzIiwid2VicGFjazovL3NoaWZ1bWlsaXphcmRzcG9ja3YyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJ1dHRvbnMiLCJjbGljayIsInZhbHVlcyIsImNsYXNzTmFtZSIsIm1hcCIsInZhbHVlIiwia2V5IiwidHlwZSIsIm9uQ2xpY2siLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiU2NvcmUiLCJuYW1lIiwic2NvcmUiLCJzaWduQ2hvc2VuIiwiUmVzdWx0IiwicmVzdWx0IiwiYWx0Iiwic3JjIiwiaW1nIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJwdXNoIiwibmF2TWVudSIsInJlc3RhcnQiLCJjdXJyZW50IiwiZ29CYWNrIiwiaWNvbiIsImZhQXJyb3dDaXJjbGVMZWZ0Iiwic2l6ZSIsImZhUXVlc3Rpb25DaXJjbGUiLCJmYVN5bmMiLCJ1c2VTdGF0ZSIsInBsYXllclNjb3JlIiwic2V0UGxheWVyU2NvcmUiLCJjb21wdXRlclNjb3JlIiwic2V0Q29tcHV0ZXJTY29yZSIsInBsYXllckNob2ljZSIsInNldFBsYXllckNob2ljZSIsImNvbXB1dGVyQ2hvaWNlIiwic2V0Q29tcHV0ZXJDaG9pY2UiLCJzZXRSZXN1bHQiLCJzd2l0Y2hSb3VuZCIsInNldFN3aXRjaFJvdW5kIiwicmVzZXRTY29yZSIsInVzZUVmZmVjdCIsInJvdW5kUmVzdWx0IiwiY29tcGFyZVJlc3VsdCIsImV4YWN0IiwicGF0aCIsIm5ld1ZhbHVlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiTmF2TWVudSIsInJvb3RSZWFjdEVsZW1lbnQiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOFJBS01BLEVBQVUsU0FBQyxHQUFELElBQUdDLEVBQUgsRUFBR0EsTUFBT0MsRUFBVixFQUFVQSxPQUFWLE9BQ2QsdUJBQUtDLFVBQVUscUJBRVpELEVBQU9FLEtBQUksU0FBQ0MsR0FBRCxPQUNWLDBCQUNFRixVQUFXRSxFQUNYQyxJQUFLRCxFQUNMRSxLQUFLLFNBQ0xDLFFBQVMsa0JBQU1QLEVBQU1JLEtBSnZCLElBS0dBLFFBTVRMLEVBQVFTLFVBQVksQ0FDbEJSLE1BQU9TLG9CQUNQUixPQUFRUSxZQUFrQkEsdUJBQTZCQyxZQUd6RCxVQ3BCQSxJQUFNQyxFQUFRLFNBQUMsR0FBRCxJQUFHQyxFQUFILEVBQUdBLEtBQU1DLEVBQVQsRUFBU0EsTUFBT0MsRUFBaEIsRUFBZ0JBLFdBQWhCLE9BQ1osMkJBQ1ksV0FBVEYsRUFFRyxnQ0FDRSx1QkFBS1YsVUFBVSxTQUFmLFlBQWlDVyxHQUNqQyx1QkFBS1gsVUFBUyxxQkFBZ0JZLElBQThCLEtBQWZBLEdBQXFCLE1BS3BFLGdDQUNFLHVCQUFLWixVQUFTLHFCQUFnQlksSUFBOEIsS0FBZkEsR0FBcUIsS0FDbEUs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S0FBRCxDQUFPOEMsT0FBSyxFQUFDQyxLQUFLLEtBQ2hCLGdCQUFDLEVBQUQsT0FFRixnQkFBQyxLQUFELENBQU9BLEtBQUssU0FDVixnQkFBQyxFQUFELENBQVNoRCxPQUFRQSxFQUFRRCxNQWxHUixTQUFDa0QsR0FDdEJaLEVBQWdCWSxHQUNoQlYsRUFBa0J2QyxFQUFPa0QsS0FBS0MsTUFBTUQsS0FBS0UsU0FBV3BELEVBQU9xRCxVQUMzRFgsR0FBZ0JELE1BZ0daLHVCQUFLeEMsVUFBVSxtQkFDYixnQkFBQyxFQUFELENBQU9VLEtBQUssU0FBU0MsTUFBT29CLEVBQWFuQixXQUFZdUIsSUFDckQsZ0JBQUMsRUFBRCxDQUFRckIsT0FBUUEsSUFDaEIsZ0JBQUMsRUFBRCxDQUFPSixLQUFLLGFBQWFDLE1BQU9zQixFQUFlckIsV0FBWXlCLEtBRTdELGdCQUFDZ0IsRUFBRCxDQUFTL0IsUUFBU29CLEVBQVluQixRQUFRLFVBRXhDLGdCQUFDLEtBQUQsQ0FBT3dCLEtBQUssVUFDVixnQkFBQyxFQUFELE1BQ0EsZ0JBQUNNLEVBQUQsQ0FBUy9CLFFBQVNvQixFQUFZbkIsUUFBUSxhQzFIOUMsSUFBTStCLEVBQ0osZ0JBQUMsS0FBRCxLQUNFLGdCQUFDLEVBQUQsT0FJRUMsRUFBU0MsU0FBU0MsZUFBZSxTQUV2Q0MsWUFBT0osRUFBa0JDLEkiLCJmaWxlIjoianMvbWFpbi4yZDRjN2FlNjg2YmIyYThmZDI4NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vYnV0dG9ucy5zY3NzJztcblxuY29uc3QgQnV0dG9ucyA9ICh7IGNsaWNrLCB2YWx1ZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnMtY29udGFpbmVyXCI+XG5cbiAgICB7dmFsdWVzLm1hcCgodmFsdWUpID0+IChcbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXt2YWx1ZX1cbiAgICAgICAga2V5PXt2YWx1ZX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrKHZhbHVlKX1cbiAgICAgID4ge3ZhbHVlfVxuICAgICAgPC9idXR0b24+XG4gICAgKSl9XG4gIDwvZGl2PlxuKTtcblxuQnV0dG9ucy5wcm9wVHlwZXMgPSB7XG4gIGNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL3Njb3JlLnNjc3MnO1xuXG5jb25zdCBTY29yZSA9ICh7IG5hbWUsIHNjb3JlLCBzaWduQ2hvc2VuIH0pID0+IChcbiAgPGRpdj5cbiAgICB7bmFtZSA9PT0gJ2pvdWV1cidcbiAgICAgID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVcIj5QbGF5ZXIgOiB7c2NvcmV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWduLXN0eWxlICR7c2lnbkNob3Nlbn1gfT57c2lnbkNob3NlbiA9PT0gJycgJiYgJz8nfTwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgIClcblxuICAgICAgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWduLXN0eWxlICR7c2lnbkNob3Nlbn1gfT57c2lnbkNob3NlbiA9PT0gJycgJiYgJz8nfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVcIj4gQ29tcHV0ZXIgOiB7c2NvcmV9PC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5TY29yZS5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2NvcmU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc2lnbkNob3NlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL3Jlc3VsdC5zY3NzJztcblxuY29uc3QgUmVzdWx0ID0gKHsgcmVzdWx0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj4ge3Jlc3VsdH08L2Rpdj5cbik7XG5cblJlc3VsdC5wcm9wVHlwZXMgPSB7XG4gIHJlc3VsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0O1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy84ZDFiNGZlYWNkNzFkYmQzNDUzMTljYzZkNDkzOTg5Mi5qcGdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGltZyBmcm9tICdzcmMvYXNzZXRzL2ltYWdlcy9ydWxlcy5qcGcnO1xuXG5pbXBvcnQgJy4vcnVsZXMuc2Nzcyc7XG5cbmNvbnN0IFJ1bGVzID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVzXCI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJydWxlc19faW1nXCIgYWx0PVwiXCIgc3JjPXtpbWd9IC8+XG4gICAgPHVsIGNsYXNzTmFtZT1cInJ1bGVzX19saXN0XCI+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwicnVsZXNfX2xpc3RfX2l0ZW1cIj5MZXMgPGVtPjxlbT5jaXNlYXV4PC9lbT48L2VtPiBjb3VwZW50IGxlIDxlbT48ZW0+cGFwaWVyPC9lbT48L2VtPjwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwicnVsZXNfX2xpc3RfX2l0ZW1cIj5sZSA8ZW0+PGVtPnBhcGllcjwvZW0+PC9lbT4gYmF0IGxhIDxlbT48ZW0+cGllcnJlPC9lbT48L2VtPjwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwicnVsZXNfX2xpc3RfX2l0ZW1cIj5sYSA8ZW0+cGllcnJlPC9lbT4gw6ljcmFzZSBsZSA8ZW0+PGVtPmzDqXphcmQ8L2VtPjwvZW0+PC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJydWxlc19fbGlzdF9faXRlbVwiPmxlIDxlbT5sw6l6YXJkPC9lbT4gZW1wb2lzb25uZSA8ZW0+U3BvY2s8L2VtPjwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwicnVsZXNfX2xpc3RfX2l0ZW1cIj48ZW0+U3BvY2s8L2VtPiDDqWNyYWJvdWlsbGUgbGVzIDxlbT5jaXNlYXV4PC9lbT48L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cInJ1bGVzX19saXN0X19pdGVtXCI+bGVzIDxlbT5jaXNlYXV4PC9lbT4gZMOpY2FwaXRlbnQgbGUgPGVtPmzDqXphcmQ8L2VtPjwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwicnVsZXNfX2xpc3RfX2l0ZW1cIj5sZSA8ZW0+bMOpemFyZDwvZW0+IG1hbmdlIGxlIDxlbT5wYXBpZXI8L2VtPjwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwicnVsZXNfX2xpc3RfX2l0ZW1cIj5sZSA8ZW0+cGFwaWVyPC9lbT4gcmVwb3Vzc2UgPGVtPlNwb2NrPC9lbT48L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cInJ1bGVzX19saXN0X19pdGVtXCI+PGVtPlNwb2NrPC9lbT4gZMOpdHJ1aXQgbGEgPGVtPnBpZXJyZTwvZW0+PC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJydWxlc19fbGlzdF9faXRlbVwiPkxhIDxlbT5waWVycmU8L2VtPiBiYXQgbGVzIDxlbT5jaXNlYXV4PC9lbT48L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSdWxlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCAnLi9ob21lUGFnZS5zY3NzJztcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVQYWdlQnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+Um9jayA8ZW0+LjwvZW0+IFBhcGVyIDxlbT4uPC9lbT4gU2Npc3NvcnMgPGVtPi48L2VtPiBMaXphcmQgPGVtPi48L2VtPiBTcG9jazwvaDE+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWVQYWdlQnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL2dhbWUnKX0+Sm91ZXI8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaG9tZVBhZ2VCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKCcvcnVsZXMnKX0+UsOoZ2xlczwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7XG4gIGZhUXVlc3Rpb25DaXJjbGUsIGZhQXJyb3dDaXJjbGVMZWZ0LCBmYVN5bmMsXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmltcG9ydCAnLi9uYXZNZW51LnNjc3MnO1xuXG5jb25zdCBuYXZNZW51ID0gKHsgcmVzdGFydCwgY3VycmVudCB9KSA9PiB7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbWVudVwiPlxuICAgICAge2N1cnJlbnQgPT09ICdnYW1lJ1xuICAgICAgICA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydWxlcy1pY29uXCIgb25DbGljaz17KCkgPT4gaGlzdG9yeS5nb0JhY2soKX0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93Q2lyY2xlTGVmdH0gc2l6ZT1cIjN4XCIgLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXMtaWNvblwiIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL3J1bGVzJyl9PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFRdWVzdGlvbkNpcmNsZX0gc2l6ZT1cIjN4XCIgLz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnVsZXMtaWNvblwiIG9uQ2xpY2s9e3Jlc3RhcnR9PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTeW5jfSBzaXplPVwiM3hcIiAvPjwvZGl2PlxuICAgICAgICAgIDwvPlxuXG4gICAgICAgIClcbiAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInJ1bGVzLWljb25cIiBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LmdvQmFjaygpfT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQXJyb3dDaXJjbGVMZWZ0fSBzaXplPVwiMnhcIiAvPjwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbm5hdk1lbnUucHJvcFR5cGVzID0ge1xuICBjdXJyZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJlc3RhcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBuYXZNZW51O1xuIiwiLy8gPT0gSW1wb3J0IG5wbVxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vLyA9PSBJbXBvcnRcbmltcG9ydCBCdXR0b25zIGZyb20gJ3NyYy9jb21wb25lbnRzL0J1dHRvbnMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJ3NyYy9jb21wb25lbnRzL1Njb3JlJztcbmltcG9ydCBSZXN1bHQgZnJvbSAnc3JjL2NvbXBvbmVudHMvUmVzdWx0JztcbmltcG9ydCBSdWxlcyBmcm9tICdzcmMvY29tcG9uZW50cy9SdWxlcyc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnc3JjL2NvbXBvbmVudHMvSG9tZVBhZ2UnO1xuaW1wb3J0IE5hdk1lbnUgZnJvbSAnc3JjL2NvbXBvbmVudHMvTmF2TWVudSc7XG5cbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmNvbnN0IHZhbHVlcyA9IFsncGllcnJlJywgJ3BhcGllcicsICdjaXNlYXV4JywgJ2zDqXphcmQnLCAnU3BvY2snXTtcblxuLy8gPT0gQ29tcG9zYW50XG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtwbGF5ZXJTY29yZSwgc2V0UGxheWVyU2NvcmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjb21wdXRlclNjb3JlLCBzZXRDb21wdXRlclNjb3JlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcGxheWVyQ2hvaWNlLCBzZXRQbGF5ZXJDaG9pY2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29tcHV0ZXJDaG9pY2UsIHNldENvbXB1dGVyQ2hvaWNlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCcnKTtcbiAgLy8gUGVybWV0IGRlIHRyaWdnZXIgbGUgdXNlRWZmZWN0IG3Dqm1lIHNpIG9uIG9idGllbnQgMiBmb2lzIGxlIG3Dqm1lIHLDqXN1bHRhdCAyIG1hbmNoZXMgZGUgc3VpdGU6XG4gIGNvbnN0IFtzd2l0Y2hSb3VuZCwgc2V0U3dpdGNoUm91bmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNldFJvdW5kUmVzdWx0ID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgc2V0UGxheWVyQ2hvaWNlKG5ld1ZhbHVlKTtcbiAgICBzZXRDb21wdXRlckNob2ljZSh2YWx1ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsdWVzLmxlbmd0aCldKTtcbiAgICBzZXRTd2l0Y2hSb3VuZCghc3dpdGNoUm91bmQpO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmVSZXN1bHQgPSAoKSA9PiB7XG4gICAgbGV0IHJvdW5kUmVzdWx0ID0gJyc7XG4gICAgc3dpdGNoIChwbGF5ZXJDaG9pY2UpIHtcbiAgICAgIGNhc2UgJ3BpZXJyZSc6XG4gICAgICAgIGlmIChjb21wdXRlckNob2ljZSA9PT0gJ2zDqXphcmQnIHx8IGNvbXB1dGVyQ2hvaWNlID09PSAnY2lzZWF1eCcpIHtcbiAgICAgICAgICByb3VuZFJlc3VsdCA9ICdWb3VzIHJlbXBvcnRleiBsYSBtYW5jaGUgISc7XG4gICAgICAgICAgc2V0UGxheWVyU2NvcmUocGxheWVyU2NvcmUgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21wdXRlckNob2ljZSA9PT0gJ3BpZXJyZScpIHtcbiAgICAgICAgICByb3VuZFJlc3VsdCA9ICdFZ2FsaXTDqSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcm91bmRSZXN1bHQgPSAnVm90cmUgYWR2ZXJzYWlyZSByZW1wb3J0ZSBsYSBtYW5jaGUgISc7XG4gICAgICAgICAgc2V0Q29tcHV0ZXJTY29yZShjb21wdXRlclNjb3JlICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXBpZXInOlxuICAgICAgICBpZiAoY29tcHV0ZXJDaG9pY2UgPT09ICdwaWVycmUnIHx8IGNvbXB1dGVyQ2hvaWNlID09PSAnU3BvY2snKSB7XG4gICAgICAgICAgcm91bmRSZXN1bHQgPSAnVm91cyByZW1wb3J0ZXogbGEgbWFuY2hlICEnO1xuICAgICAgICAgIHNldFBsYXllclNjb3JlKHBsYXllclNjb3JlICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tcHV0ZXJDaG9pY2UgPT09ICdwYXBpZXInKSB7XG4gICAgICAgICAgcm91bmRSZXN1bHQgPSAnRWdhbGl0w6knO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJvdW5kUmVzdWx0ID0gJ1ZvdHJlIGFkdmVyc2FpcmUgcmVtcG9ydGUgbGEgbWFuY2hlICEnO1xuICAgICAgICAgIHNldENvbXB1dGVyU2NvcmUoY29tcHV0ZXJTY29yZSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2lzZWF1eCc6XG4gICAgICAgIGlmIChjb21wdXRlckNob2ljZSA9PT0gJ3BhcGllcicgfHwgY29tcHV0ZXJDaG9pY2UgPT09ICdsw6l6YXJkJykge1xuICAgICAgICAgIHJvdW5kUmVzdWx0ID0gJ1ZvdXMgcmVtcG9ydGV6IGxhIG1hbmNoZSAhJztcbiAgICAgICAgICBzZXRQbGF5ZXJTY29yZShwbGF5ZXJTY29yZSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2hvaWNlID09PSAnY2lzZWF1eCcpIHtcbiAgICAgICAgICByb3VuZFJlc3VsdCA9ICdFZ2FsaXTDqSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcm91bmRSZXN1bHQgPSAnVm90cmUgYWR2ZXJzYWlyZSByZW1wb3J0ZSBsYSBtYW5jaGUgISc7XG4gICAgICAgICAgc2V0Q29tcHV0ZXJTY29yZShjb21wdXRlclNjb3JlICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsw6l6YXJkJzpcbiAgICAgICAgaWYgKGNvbXB1dGVyQ2hvaWNlID09PSAnU3BvY2snIHx8IGNvbXB1dGVyQ2hvaWNlID09PSAncGFwaWVyJykge1xuICAgICAgICAgIHJvdW5kUmVzdWx0ID0gJ1ZvdXMgcmVtcG9ydGV6IGxhIG1hbmNoZSAhJztcbiAgICAgICAgICBzZXRQbGF5ZXJTY29yZShwbGF5ZXJTY29yZSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2hvaWNlID09PSAnbMOpemFyZCcpIHtcbiAgICAgICAgICByb3VuZFJlc3VsdCA9ICdFZ2FsaXTDqSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcm91bmRSZXN1bHQgPSAnVm90cmUgYWR2ZXJzYWlyZSByZW1wb3J0ZSBsYSBtYW5jaGUgISc7XG4gICAgICAgICAgc2V0Q29tcHV0ZXJTY29yZShjb21wdXRlclNjb3JlICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdTcG9jayc6XG4gICAgICAgIGlmIChjb21wdXRlckNob2ljZSA9PT0gJ3BpZXJyZScgfHwgY29tcHV0ZXJDaG9pY2UgPT09ICdjaXNlYXV4Jykge1xuICAgICAgICAgIHJvdW5kUmVzdWx0ID0gJ1ZvdXMgcmVtcG9ydGV6IGxhIG1hbmNoZSAhJztcbiAgICAgICAgICBzZXRQbGF5ZXJTY29yZShwbGF5ZXJTY29yZSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2hvaWNlID09PSAnU3BvY2snKSB7XG4gICAgICAgICAgcm91bmRSZXN1bHQgPSAnRWdhbGl0w6knO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJvdW5kUmVzdWx0ID0gJ1ZvdHJlIGFkdmVyc2FpcmUgcmVtcG9ydGUgbGEgbWFuY2hlICEnO1xuICAgICAgICAgIHNldENvbXB1dGVyU2NvcmUoY29tcHV0ZXJTY29yZSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcm91bmRSZXN1bHQgPSAnJztcbiAgICB9XG4gICAgc2V0UmVzdWx0KHJvdW5kUmVzdWx0KTtcbiAgfTtcblxuICBjb25zdCByZXNldFNjb3JlID0gKCkgPT4ge1xuICAgIHNldFBsYXllclNjb3JlKDApO1xuICAgIHNldENvbXB1dGVyU2NvcmUoMCk7XG4gICAgc2V0UGxheWVyQ2hvaWNlKCcnKTtcbiAgICBzZXRDb21wdXRlckNob2ljZSgnJyk7XG4gICAgc2V0UmVzdWx0KCcnKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbXBhcmVSZXN1bHQoKTtcbiAgfSwgW3N3aXRjaFJvdW5kXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XG4gICAgICAgIDxIb21lUGFnZSAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2dhbWVcIj5cbiAgICAgICAgPEJ1dHRvbnMgdmFsdWVzPXt2YWx1ZXN9IGNsaWNrPXtzZXRSb3VuZFJlc3VsdH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8U2NvcmUgbmFtZT1cImpvdWV1clwiIHNjb3JlPXtwbGF5ZXJTY29yZX0gc2lnbkNob3Nlbj17cGxheWVyQ2hvaWNlfSAvPlxuICAgICAgICAgIDxSZXN1bHQgcmVzdWx0PXtyZXN1bHR9IC8+XG4gICAgICAgICAgPFNjb3JlIG5hbWU9XCJhZHZlcnNhaXJlXCIgc2NvcmU9e2NvbXB1dGVyU2NvcmV9IHNpZ25DaG9zZW49e2NvbXB1dGVyQ2hvaWNlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE5hdk1lbnUgcmVzdGFydD17cmVzZXRTY29yZX0gY3VycmVudD1cImdhbWVcIiAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3J1bGVzXCI+XG4gICAgICAgIDxSdWxlcyAvPlxuICAgICAgICA8TmF2TWVudSByZXN0YXJ0PXtyZXNldFNjb3JlfSBjdXJyZW50PVwicnVsZXNcIiAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09IEV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiLy8gPT0gSW1wb3J0IDogbnBtXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gPT0gSW1wb3J0IDogbG9jYWxcbi8vIENvbXBvc2FudHNcbmltcG9ydCBBcHAgZnJvbSAnc3JjL2NvbXBvbmVudHMvQXBwJztcblxuLy8gPT0gUmVuZGVyXG4vLyAxLiDDiWzDqW1lbnQgUmVhY3QgcmFjaW5lIChjZWx1aSBxdWkgY29udGllbnQgbCdlbnNlbWJsZSBkZSBsJ2FwcClcbi8vICAgID0+IGNyw6llIHVuZSBzdHJ1Y3R1cmUgZCdvYmpldHMgaW1icmlxdcOpcyAoRE9NIHZpcnR1ZWwpXG5jb25zdCByb290UmVhY3RFbGVtZW50ID0gKFxuICA8QnJvd3NlclJvdXRlcj5cbiAgICA8QXBwIC8+XG4gIDwvQnJvd3NlclJvdXRlcj5cbik7XG4vLyAyLiBMYSBjaWJsZSBkdSBET00gKGzDoCBvw7kgbGEgc3RydWN0dXJlIGRvaXQgcHJlbmRyZSB2aWUgZGFucyBsZSBET00pXG5jb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuLy8gMy4gRMOpY2xlbmNoZW1lbnQgZHUgcmVuZHUgZGUgUmVhY3QgKHZpcnR1ZWwpID0+IERPTSAocGFnZSB3ZWIpXG5yZW5kZXIocm9vdFJlYWN0RWxlbWVudCwgdGFyZ2V0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=