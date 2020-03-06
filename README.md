# CPE 1040 - Spring 2020

## Assignment 5: Transistors

Author: Ivo Georgiev, PhD  
Last updated: 2020-02-22  
Code: 98ffb5e9c5964e27028001933faec10caa0e4709  

---

_**NOTE:** This assignment [README](README.md) is _intentionally_ blank. It is part of the assignment to fill it. Refer to the [submission template](submission-template.md) for expectations and guidance. Read the [requirements](requirements.md) and [criteria](criteria.md) for the assignment proper._


```
  _           _       _   _       _       _                 _    
 | |         | |     | \ | |     | |     | |               | |   
 | |     __ _| |__   |  \| | ___ | |_ ___| |__   ___   ___ | | __
 | |    / _` | '_ \  | . ` |/ _ \| __/ _ \ '_ \ / _ \ / _ \| |/ /
 | |___| (_| | |_) | | |\  | (_) | ||  __/ |_) | (_) | (_) |   < 
 |______\__,_|_.__/  |_| \_|\___/ \__\___|_.__/ \___/ \___/|_|\_\
                                                                                                                      
```
Art acknowledgement: [taag](http://patorjk.com/software/taag/)

**NPN Circuit**
**Voltage measurements with switch off:**
Voltage across resistor R(c) is 0v.
Voltage at the base, emitter and collector is 0v.
**Current measurements with switch off:**
The current at the collector, emitter, and base is 0 amps. We also know this because I = V/R. If V = 0, then current will always be equal to 0. No current is flowing because no voltage is flowing.

**Voltage measurements with switch on:**
Voltage across resistor R(c) is 2.85v.
Voltage from the base relative to ground is .75v.
Voltage from the collector relative to ground is .105v.
Voltage from the emitter relative to ground is .006v.
**Current measurements with switch on:**
The current at the collector is 6.2 mAmps or .0062 amps.     
The current at the base is .3 mAmps or .0003 amps.    
The current at the emitter is 6.5 mAmps or .0065 amps. 

These measurements show us that the emitter is emitting the sum of the base and collector current. This is also seen because 6.2 + .3 = 6.5 mAmps or .0065 amps.  

The amplification coefficient is about 20 because the ratio of collector:base is approximately 20:1

[Here](https://imgur.com/a/XaB01gS) is a drawing of my NPN circuit.

**PNP Circuit**
The PNP transistor causes the LED to be off while the switch is on. This is opposite from the NPN circuit where the turning the switch on would turn the LED on.

**Measurements with switch on**
Voltage at the collector, base, emitter, and resistor R(c) is 0v.
Current at the collector, base, and emitter is 0 Amps.

**Voltage measurements with switch off**
Voltage drop across the resistor R(c) is 2.68v.
Voltage at the collector is 4.99v.
Voltage at the base is 4.34v.
Voltage at the emitter is 5.07v.

**Current measurements with switch off**
The current at the collector is 6.99 mAmps.
The current at the base is .44 mAmps.
The current at the emitter is 7.43 mAmps. 

With these current measurements we can once again see that emitter current is the sum of collector plus base current. In this case it is 6.99 + .44 = 7.43 mAmps

The amplification coefficient from these measurements is approximately 16:1. This is because 6.99 is about x16 bigger than .44.

You can find my drawing of the PNP circuit [Here](https://imgur.com/a/4xbOpXB)
