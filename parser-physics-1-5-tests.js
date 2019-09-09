import {ParserTest} from './parser-tests.js';
import 'mathjax3/js/input/tex/physics/PhysicsConfiguration.js';

class ParserPhysicsTest1_5 extends ParserTest {

  constructor() {
    super();
    this.packages = ['base', 'physics'];
  }
};

let parserTest = new ParserPhysicsTest1_5();


parserTest.runTest(
  'Quantities_Order_0', '\\order{}',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 1,
         "attributes": {"mathvariant": "-tex-caligraphic"},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
         "properties": {"texClass": 1,
                        "fnOP": true},
         "childNodes": [
           {"kind": "text",
            "text": "O"}]},
        {"kind": "mo",
         "texClass": -1,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix"},
         "properties": {"texClass": -1},
         "childNodes": [
           {"kind": "text",
            "text": "⁡"}],
         "isEmbellished": true},
        {"kind": "mrow",
         "texClass": 4,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "(",
                        "close": ")",
                        "texClass": 7},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "prefix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {"texClass": 4},
              "childNodes": [
                {"kind": "text",
                  "text": "("}],
              "isEmbellished": true},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {"texClass": 5},
              "childNodes": [
                {"kind": "text",
                  "text": ")"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Order_1', '\\order{x^2}',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 1,
         "attributes": {"mathvariant": "-tex-caligraphic"},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
         "properties": {"texClass": 1,
                        "fnOP": true},
         "childNodes": [
           {"kind": "text",
            "text": "O"}]},
        {"kind": "mo",
         "texClass": -1,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix"},
         "properties": {"texClass": -1},
         "childNodes": [
           {"kind": "text",
            "text": "⁡"}],
         "isEmbellished": true},
        {"kind": "mrow",
         "texClass": 4,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "(",
                        "close": ")",
                        "texClass": 7},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {"texClass": 4},
            "childNodes": [
              {"kind": "text",
               "text": "("}],
            "isEmbellished": true},
            {"kind": "msup",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0},
              "properties": {},
              "childNodes": [
                {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                    "scriptlevel": 0,
                    "mathvariant": "italic"},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                      "text": "x"}]},
                {"kind": "mn",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                      "text": "2"}]}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {"texClass": 5},
              "childNodes": [
                {"kind": "text",
                  "text": ")"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Order_2', '\\order\\Bigg{x^2}',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 1,
         "attributes": {"mathvariant": "-tex-caligraphic"},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
         "properties": {"texClass": 1,
                        "fnOP": true},
         "childNodes": [
           {"kind": "text",
            "text": "O"}]},
        {"kind": "mo",
         "texClass": -1,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix"},
         "properties": {"texClass": -1},
         "childNodes": [
           {"kind": "text",
            "text": "⁡"}],
         "isEmbellished": true},
        {"kind": "mrow",
         "texClass": 4,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "TeXAtom",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {"texClass": 4},
            "childNodes": [
              {"kind": "mrow",
               "texClass": 4,
               "attributes": {},
               "inherited": {"displaystyle": true,
                             "scriptlevel": 0},
               "properties": {},
               "childNodes": [
                 {"kind": "mo",
                  "texClass": 4,
                  "attributes": {"minsize": "2.470em",
                                 "maxsize": "2.470em"},
                  "inherited": {"displaystyle": true,
                                "scriptlevel": 0,
                                "form": "infix",
                                "fence": true,
                                "stretchy": true,
                                "symmetric": true},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                     "text": "("}],
                  "isEmbellished": true}],
               "isInferred": true,
               "isEmbellished": true}],
              "isEmbellished": true},
            {"kind": "msup",
              "texClass": 0,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0},
              "properties": {},
              "childNodes": [
                {"kind": "mi",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                    "scriptlevel": 0,
                    "mathvariant": "italic"},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                      "text": "x"}]},
                {"kind": "mn",
                  "texClass": 0,
                  "attributes": {},
                  "inherited": {"displaystyle": false,
                    "scriptlevel": 1},
                  "properties": {},
                  "childNodes": [
                    {"kind": "text",
                      "text": "2"}]}]},
            {"kind": "TeXAtom",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0},
              "properties": {"texClass": 5},
              "childNodes": [
                {"kind": "mrow",
                  "texClass": 5,
                  "attributes": {},
                  "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
                  "properties": {},
                  "childNodes": [
                    {"kind": "mo",
                      "texClass": 5,
                      "attributes": {"minsize": "2.470em",
                        "maxsize": "2.470em"},
                      "inherited": {"displaystyle": true,
                        "scriptlevel": 0,
                        "form": "infix",
                        "fence": true,
                        "stretchy": true,
                        "symmetric": true},
                      "properties": {},
                      "childNodes": [
                        {"kind": "text",
                          "text": ")"}],
                      "isEmbellished": true}],
                  "isInferred": true,
                  "isEmbellished": true}],
              "isEmbellished": true}],
          "isInferred": true}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Order_3', '\\order{\\frac{A}{\\frac{A}{\\int x}}}',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 1,
         "attributes": {"mathvariant": "-tex-caligraphic"},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
         "properties": {"texClass": 1,
                        "fnOP": true},
         "childNodes": [
           {"kind": "text",
            "text": "O"}]},
        {"kind": "mo",
         "texClass": -1,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix"},
         "properties": {"texClass": -1},
         "childNodes": [
           {"kind": "text",
            "text": "⁡"}],
         "isEmbellished": true},
        {"kind": "mrow",
         "texClass": 4,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {"open": "(",
                        "close": ")",
                        "texClass": 7},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {"texClass": 4},
            "childNodes": [
              {"kind": "text",
               "text": "("}],
            "isEmbellished": true},
           {"kind": "mfrac",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0,
                             "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "A"}]},
              {"kind": "mfrac",
               "texClass": null,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
                  "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mi",
                      "texClass": 0,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 1,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "A"}]},
                    {"kind": "mrow",
                      "texClass": 1,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 1},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "mo",
                          "texClass": 1,
                          "attributes": {},
                          "inherited": {"displaystyle": false,
                            "scriptlevel": 1,
                            "form": "prefix",
                            "largeop": true,
                            "symmetric": true},
                          "properties": {"texClass": 1,
                            "texprimestyle": true},
                          "childNodes": [
                            {"kind": "text",
                              "text": "∫"}],
                          "isEmbellished": true},
                        {"kind": "mi",
                          "texClass": 0,
                          "attributes": {},
                          "inherited": {"displaystyle": false,
                            "scriptlevel": 1,
                            "mathvariant": "italic"},
                          "properties": {"texprimestyle": true},
                          "childNodes": [
                            {"kind": "text",
                              "text": "x"}]}]}]}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {"texClass": 5},
              "childNodes": [
                {"kind": "text",
                  "text": ")"}],
              "isEmbellished": true}]}],
      "isInferred": true}]}
);


parserTest.runTest(
  'Quantities_Order_4', '\\order*{\\frac{A}{\\frac{A}{\\int x}}}',
  {"kind": "math",
   "texClass": 1,
   "attributes": {"display": "block"},
   "inherited": {"displaystyle": true,
                 "scriptlevel": 0},
   "properties": {},
   "childNodes": [
     {"kind": "mrow",
      "texClass": 1,
      "attributes": {},
      "inherited": {"displaystyle": true,
                    "scriptlevel": 0},
      "properties": {},
      "childNodes": [
        {"kind": "mi",
         "texClass": 1,
         "attributes": {"mathvariant": "-tex-caligraphic"},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "mathvariant": "italic"},
         "properties": {"texClass": 1,
                        "fnOP": true},
         "childNodes": [
           {"kind": "text",
            "text": "O"}]},
        {"kind": "mo",
         "texClass": -1,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0,
                       "form": "infix"},
         "properties": {"texClass": -1},
         "childNodes": [
           {"kind": "text",
            "text": "⁡"}],
         "isEmbellished": true},
        {"kind": "mrow",
         "texClass": 4,
         "attributes": {},
         "inherited": {"displaystyle": true,
                       "scriptlevel": 0},
         "properties": {},
         "childNodes": [
           {"kind": "mo",
            "texClass": 4,
            "attributes": {"stretchy": false},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0,
                          "form": "prefix",
                          "fence": true,
                          "stretchy": true,
                          "symmetric": true},
            "properties": {},
            "childNodes": [
              {"kind": "text",
               "text": "("}],
            "isEmbellished": true},
           {"kind": "mfrac",
            "texClass": null,
            "attributes": {},
            "inherited": {"displaystyle": true,
                          "scriptlevel": 0},
            "properties": {},
            "childNodes": [
              {"kind": "mi",
               "texClass": 0,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0,
                             "mathvariant": "italic"},
               "properties": {},
               "childNodes": [
                 {"kind": "text",
                  "text": "A"}]},
              {"kind": "mfrac",
               "texClass": null,
               "attributes": {},
               "inherited": {"displaystyle": false,
                             "scriptlevel": 0},
               "properties": {"texprimestyle": true},
                  "childNodes": [
                    {"kind": "mi",
                      "texClass": 0,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 1,
                        "mathvariant": "italic"},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "text",
                          "text": "A"}]},
                    {"kind": "mrow",
                      "texClass": 1,
                      "attributes": {},
                      "inherited": {"displaystyle": false,
                        "scriptlevel": 1},
                      "properties": {"texprimestyle": true},
                      "childNodes": [
                        {"kind": "mo",
                          "texClass": 1,
                          "attributes": {},
                          "inherited": {"displaystyle": false,
                            "scriptlevel": 1,
                            "form": "prefix",
                            "largeop": true,
                            "symmetric": true},
                          "properties": {"texClass": 1,
                            "texprimestyle": true},
                          "childNodes": [
                            {"kind": "text",
                              "text": "∫"}],
                          "isEmbellished": true},
                        {"kind": "mi",
                          "texClass": 0,
                          "attributes": {},
                          "inherited": {"displaystyle": false,
                            "scriptlevel": 1,
                            "mathvariant": "italic"},
                          "properties": {"texprimestyle": true},
                          "childNodes": [
                            {"kind": "text",
                              "text": "x"}]}]}]}]},
            {"kind": "mo",
              "texClass": 5,
              "attributes": {"stretchy": false},
              "inherited": {"displaystyle": true,
                "scriptlevel": 0,
                "form": "postfix",
                "fence": true,
                "stretchy": true,
                "symmetric": true},
              "properties": {},
              "childNodes": [
                {"kind": "text",
                  "text": ")"}],
              "isEmbellished": true}],
          "isInferred": true}],
      "isInferred": true}]}
);


parserTest.printTime();
