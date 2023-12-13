
        function yearValue() {
            if (ysSlider1.value === "0") {
                (() => {
                    document.getElementById('yServcheck').innerText = 1200;
                    document.getElementById('yBsPrice').innerText = 2640;
                    document.getElementById('yBtpCharge').innerText = 2.2;
                    document.getElementById('yAdPrice').innerText = 18000;
                    document.getElementById('yAtpCharge').innerText = 15;
                    document.getElementById('yEtPrice').innerText = 36000;
                })();
            } else if (ysSlider1.value === "1") {
                (() => {
                    document.getElementById('yServcheck').innerText = 3000;
                    document.getElementById('yBsPrice').innerText = 5100;
                    document.getElementById('yBtpCharge').innerText = 1.7;
                    document.getElementById('yAdPrice').innerText = 36000;
                    document.getElementById('yAtpCharge').innerText = 12;
                    document.getElementById('yEtPrice').innerText = 75000;
                })();
            }
            else if (ysSlider1.value === "2") {
                (() => {
                    document.getElementById('yServcheck').innerText = 5000;
                    document.getElementById('yBsPrice').innerText = 7500;
                    document.getElementById('yBtpCharge').innerText = 1.5;
                    document.getElementById('yAdPrice').innerText = 50000;
                    document.getElementById('yAtpCharge').innerText = 10;
                    document.getElementById('yEtPrice').innerText = 110000;
    
                })();
            } else if (ysSlider1.value === "3") {
                (() => {
                    document.getElementById('yServcheck').innerText = 10000;
                    document.getElementById('yBsPrice').innerText = 14000;
                    document.getElementById('yBtpCharge').innerText = 1.4;
                    document.getElementById('yAdPrice').innerText = 90000;
                    document.getElementById('yAtpCharge').innerText = 9;
                    document.getElementById('yEtPrice').innerText = 200000;
    
                })();
            } else if (ysSlider1.value === "4") {
                (() => {
                    document.getElementById('yServcheck').innerText = 15000;
                    document.getElementById('yBsPrice').innerText = 19500;
                    document.getElementById('yBtpCharge').innerText = 1.3;
                    document.getElementById('yAdPrice').innerText = 120000;
                    document.getElementById('yAtpCharge').innerText = 8;
                    document.getElementById('yEtPrice').innerText = 270000;
    
                })();
            } else {
                                
                    document.getElementById('yServcheck').innerText = 0;
            }

            if (yiSlider2.value === "0") {
                (() => {
                    document.getElementById('yIncheck').innerText = 1200;
                    document.getElementById('yInPrice').innerText = 1200;
                    document.getElementById('yItpCharge').innerText = 1;
                })();
            } else if (yiSlider2.value === "1") {
                (() => {
                    document.getElementById('yIncheck').innerText = 3000;
                    document.getElementById('yInPrice').innerText = 2250;
                    document.getElementById('yItpCharge').innerText = 0.75;
                })();
            }
            else if (yiSlider2.value === "2") {
                (() => {
                    document.getElementById('yIncheck').innerText = 5000;
                    document.getElementById('yInPrice').innerText = 3250;
                    document.getElementById('yItpCharge').innerText = 0.65;
                })();
            } else if (yiSlider2.value === "3") {
                (() => {
                    document.getElementById('yIncheck').innerText = 10000;
                    document.getElementById('yInPrice').innerText = 6000;
                    document.getElementById('yItpCharge').innerText = 0.6;
                })();
            } else if (yiSlider2.value === "4") {
                (() => {
                    document.getElementById('yIncheck').innerText = 15000;
                    document.getElementById('yInPrice').innerText = 8250;
                    document.getElementById('yItpCharge').innerText = 0.55;
                })();
            } else {
                                
                    document.getElementById('yIncheck').innerText = 0;
            }
        }

        function quarterValue() {
            if (qsSlider.value === "0") {
                (() => {
                    document.getElementById('qServcheck').innerText = 300;
                    document.getElementById('qBsPrice').innerText = 1200;
                    document.getElementById('qBtpCharge').innerText = 4;
                    document.getElementById('qAdPrice').innerText = 5400;
                    document.getElementById('qAtpCharge').innerText = 18;
                    document.getElementById('qEtPrice').innerText = 10800;
                })();
            } else if (qsSlider.value === "1") {
                (() => {
                    document.getElementById('qServcheck').innerText = 750;
                    document.getElementById('qBsPrice').innerText = 1530;
                    document.getElementById('qBtpCharge').innerText = 2.04;
                    document.getElementById('qAdPrice').innerText = 10800;
                    document.getElementById('qAtpCharge').innerText = 14.4;
                    document.getElementById('qEtPrice').innerText = 22500;
                })();
            }
            else if (qsSlider.value === "2") {
                (() => {
                    document.getElementById('qServcheck').innerText = 1250;
                    document.getElementById('qBsPrice').innerText = 2250;
                    document.getElementById('yBtpCharge').innerText = 1.8;
                    document.getElementById('qAdPrice').innerText = 15000;
                    document.getElementById('qAtpCharge').innerText = 12;
                    document.getElementById('qEtPrice').innerText = 33000;
    
                })();
            } else if (qsSlider.value === "3") {
                (() => {
                    document.getElementById('qServcheck').innerText = 2500;
                    document.getElementById('qBsPrice').innerText = 4200;
                    document.getElementById('qBtpCharge').innerText = 1.68;
                    document.getElementById('qAdPrice').innerText = 27000;
                    document.getElementById('qAtpCharge').innerText = 10.8;
                    document.getElementById('qEtPrice').innerText = 60000;
    
                })();
            } else if (qsSlider.value === "4") {
                (() => {
                    document.getElementById('qServcheck').innerText = 3750;
                    document.getElementById('qBsPrice').innerText = 5850;
                    document.getElementById('qBtpCharge').innerText = 1.56;
                    document.getElementById('qAdPrice').innerText = 36000;
                    document.getElementById('qAtpCharge').innerText = 9.6;
                    document.getElementById('qEtPrice').innerText = 81000;
    
                })();
            } else {
                                
                    document.getElementById('qServcheck').innerText = 0;
            }
        }