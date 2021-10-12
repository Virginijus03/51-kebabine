var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produktas = (function () {
    function Produktas(pavadinimas, svoris, kaina) {
        this.kaina = kaina;
        this.svoris = svoris;
        this.pavadinimas = pavadinimas;
        this.barcode = 100000 + Math.round(Math.random() * 10000);
    }
    Produktas.prototype.spausdintiDuomenis = function () {
        console.log("Produktas: " + this.pavadinimas);
        console.log("Barkodas: " + this.barcode);
        console.log("Svoris: " + this.svoris + " g.");
        console.log("Kaina: " + this.kaina + " eur.");
    };
    return Produktas;
}());
var BulvytesTipas;
(function (BulvytesTipas) {
    BulvytesTipas["Lazdeles"] = "lzdl";
    BulvytesTipas["Laiveliai"] = "lvl";
    BulvytesTipas["Puseles"] = "psls";
})(BulvytesTipas || (BulvytesTipas = {}));
var A = (function () {
    function A() {
    }
    return A;
}());
var a = new A();
a.x;
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.metodas = function () {
        this.z;
        this.x;
    };
    return B;
}(A));
var Bulvytes = (function (_super) {
    __extends(Bulvytes, _super);
    function Bulvytes(kiekis, tipas) {
        if (tipas === void 0) { tipas = BulvytesTipas.Lazdeles; }
        var _this = _super.call(this, "Bulvytės", 150, 2) || this;
        _this.tipas = tipas;
        _this.kiekis = kiekis;
        return _this;
    }
    Bulvytes.prototype.spausdintiDuomenis = function () {
        _super.prototype.spausdintiDuomenis.call(this);
        console.log("Kiekis: " + this.kiekis);
        console.log("Tipas: " + this.tipas);
        console.log("-------");
    };
    return Bulvytes;
}(Produktas));
var PadazoTipas;
(function (PadazoTipas) {
    PadazoTipas[PadazoTipas["Cesnakinis"] = 0] = "Cesnakinis";
    PadazoTipas[PadazoTipas["Astrus"] = 1] = "Astrus";
    PadazoTipas[PadazoTipas["Pikantiskas"] = 2] = "Pikantiskas";
    PadazoTipas[PadazoTipas["BBQ"] = 3] = "BBQ";
})(PadazoTipas || (PadazoTipas = {}));
var Padazas = (function (_super) {
    __extends(Padazas, _super);
    function Padazas(tipas, pavadinimas) {
        var _this = _super.call(this, pavadinimas, 40, 0.6) || this;
        _this.tipas = tipas;
        return _this;
    }
    Padazas.prototype.spausdintiDuomenis = function () {
        _super.prototype.spausdintiDuomenis.call(this);
        console.log("Pada\u017Eo tipas: " + PadazoTipas[this.tipas]);
    };
    return Padazas;
}(Produktas));
var Kebabas = (function (_super) {
    __extends(Kebabas, _super);
    function Kebabas(svoris) {
        if (svoris === void 0) { svoris = 700; }
        var _this = _super.call(this, "Kebabas", svoris, 4.5) || this;
        _this.padazai = [];
        return _this;
    }
    Kebabas.prototype.pridetiPadaza = function (padazas) {
        this.padazai.push(padazas);
    };
    ;
    Kebabas.prototype.spausdintiDuomenis = function () {
        _super.prototype.spausdintiDuomenis.call(this);
        console.log("Padažai:");
        console.log("================");
        for (var _i = 0, _a = this.padazai; _i < _a.length; _i++) {
            var padazas = _a[_i];
            padazas.spausdintiDuomenis();
            console.log("---");
        }
        console.log("================");
    };
    return Kebabas;
}(Produktas));
var UI = {
    nameInput: document.getElementById("produktoPavadinimas"),
    priceInput: document.getElementById("produktoKaina"),
    weightInput: document.getElementById("produktoSvoris"),
    addButton: document.getElementById("pridetiProdukta")
};
var produktai = [];
UI.addButton.addEventListener("click", function (e) {
    var pavadinimas = UI.nameInput.value;
    var svoris = Number(UI.weightInput.value);
    var kaina = Number(UI.priceInput.value);
    var naujasProduktas = new Produktas(pavadinimas, svoris, kaina);
    produktai.push(naujasProduktas);
    console.log(produktai);
});
