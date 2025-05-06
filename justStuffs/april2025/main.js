

document.addEventListener("DOMContentLoaded", function() {   

        const colors = [
            "#E3B290", "#9A5A54", "#19A496", "#CA23DD", "#8B91FF", "#0FEEDB", "#47AC3D", "#63A4AD", "#0E0065", "#C588E5",
            "#3F69B0", "#503D20", "#E8599F", "#588B65", "#FACACB", "#ED4C9C", "#F9CA43", "#63C62E", "#78C278", "#8E0C3C",
            "#A63C15", "#E06116", "#AFBA6B", "#9E405F", "#3E32E7", "#519A39", "#E20F9C", "#D38053", "#A9E847", "#82A82F",
            "#4E1F30", "#B6C86D", "#5A31C3", "#0C7954", "#E0407C", "#9E6F11", "#6A9BEE", "#00A578", "#DEFE05", "#CAB8A5",
            "#3FADA2", "#E22BFB", "#5E573D", "#6A69D1", "#C872AE", "#A6C0C4", "#8D2069", "#8DEFB7", "#A8FBD5", "#D66C02",
            "#DCC43D", "#3A2616", "#A2592B", "#70B5AB", "#33BD3D", "#52C1DC", "#7FA76C", "#91D0EF", "#F7C2C8", "#8FBE6A",
            "#87A35A", "#AC5855", "#0A27C2", "#BB8C3D", "#25CE93", "#BB3BE0", "#CC3E4E", "#4A9EEC", "#0B04DE", "#6D5F9A",
            "#F0F1C0", "#78BA5E", "#D5C859", "#96B730", "#4F9E4B", "#D56B84", "#33C52C", "#D610F1", "#F59B43", "#9BE61B",
            "#E1D235", "#B2AA74", "#8753D2", "#F63A96", "#8C55A1", "#7536A0", "#F288B0", "#FECBB1", "#06C616", "#9836D7",
            "#B43B1B", "#47AFB0", "#502299", "#9F7932", "#BF676E", "#5C1F2A", "#F877AE", "#4AD3F9", "#E042DD", "#F5561E",
            "#C7BB49", "#FDA68C", "#E8B007", "#98CE5F", "#3CCF49", "#7ECBCF", "#CC5DAA", "#5F3CF4", "#BEAB2D", "#EDE4C2",
            "#64E0B3", "#4C897B", "#A1AC1F", "#C53957", "#70610D", "#FA0E89", "#40F74A", "#AAEE2D", "#5085F1", "#273028",
            "#D67858", "#68BA74", "#429E24", "#19E8EF", "#9A1690", "#ACB168", "#81B183", "#0F6E95", "#E2619B", "#DA263E",
            "#50D7DE", "#325D11", "#D3D5B4", "#BC7D9E", "#09F5AD", "#7538F2", "#44C478", "#0BFC5A", "#446681", "#CC98C7",
            "#E9F8CD", "#C6F07E", "#89E2C4", "#4914D2", "#6470C9", "#0A35B0", "#6B3A37", "#F6A746", "#967F71", "#31F0DA",
            "#C8D2F7", "#6A3D29", "#BE0B04", "#35A9C8", "#ABF24A", "#FCD2F9", "#D5409E", "#84D3AD", "#CD06C4", "#BFB3D9",
            "#77D653", "#FBB0D4", "#C5994F", "#A3EF84", "#3E858F", "#933D81", "#BBCA4A", "#37F324", "#DBB55E", "#B89C87",
            "#FDEBB1", "#8750D6", "#8CEAC3", "#F0AC73", "#32D164", "#E7773E", "#DA40F9", "#9BCCA4", "#ED897A", "#DC4A72",
            "#6938B3", "#4E775D", "#0DA927", "#F6B685", "#51BFCB", "#DA965D", "#8BD5C5", "#E73820", "#3B46A1", "#CB2C5B",
            "#E1E3B5", "#40563D", "#55F9B1", "#8A30D4", "#E6E458", "#D2A4FB", "#ADF3BB", "#F55C54", "#50537A", "#429C9E",
            "#799AC3", "#B5703F", "#EA968A", "#A18EC2", "#80B03C", "#E3C8A9", "#DB05B8", "#607F6A", "#BC5F1D", "#27B89F",
            "#978DE6", "#CDB9DF", "#E4834E", "#CDDA8D", "#439A66", "#AC48C0", "#EF7985", "#D40A26", "#6DC7ED", "#7FA77A",
            "#7FBC95", "#F4D67D", "#BDBFAF", "#61B6F8", "#D41EDB", "#6A2F4D", "#0A7D0E", "#BF07D7", "#FDF0A3", "#C9732C",
            "#A9E798", "#CBDA53", "#1C9939", "#D49862", "#F9E43C", "#B09C67", "#7691F4", "#2DECCF", "#725E5A", "#E91F11",
            "#53E765", "#CAB184", "#E6F3B1", "#E62CE9", "#3DBB6B", "#A3F8D0", "#BA84EC", "#AACC67", "#BD41AD", "#9185A4",
            "#CAF3EC", "#84308E", "#0EB22F", "#D9BC67", "#A64D74", "#7CE4E7", "#74B4B2", "#1C3B41", "#89CB9B", "#3C22A6",
            "#DCD986", "#A37731", "#EFF3D1", "#A11DC6", "#C15A5A", "#D374F3", "#DDF196", "#B7A91A", "#49BF38", "#A9B7F7",
            "#A0419F", "#25F9A2", "#83A7D5", "#F4C7DB", "#B26784", "#C142B9", "#B9EF0D", "#F63D36", "#62E5A3", "#F2BF70",
            "#DC7899", "#4D1DAD", "#9CB268", "#3CB25F", "#589A97", "#865F92", "#F31C8D", "#2D36EC", "#C3C276", "#CA4A39",
            "#FBC2BE", "#BB8B93", "#C5F84E", "#429ADB", "#F36E4B", "#A86FC5", "#5F7A3F", "#EAB98A", "#69F9F0", "#C2CE84"
          ];
          

      const btnsContainer = document.querySelector("#btns__container");


    colors.forEach(color => {
      const btn = document.createElement('button');
      btn.className = 'color-button';
      btn.style.backgroundColor = color;
      btn.title = color;
      btn.onclick = () => {
        document.body.style.backgroundColor = color;
      };
      btnsContainer.appendChild(btn);
    });


});
