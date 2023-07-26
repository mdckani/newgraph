module.exports = {
  "nodes" : [
    {
      "id" : "4b3da0d8-60e4-4ba2-8d35-6696ff978ff2",
      "nodeType" : "EndOfTrack",
      "name" : "A"
    },
    {
      "id" : "49f533f5-2b0b-48b8-9543-a9db3a930803",
      "nodeType" : "Point",
      "name" : "B"
    },
    {
      "id" : "cd5c3f84-9f86-4d92-876e-e23304df9385",
      "nodeType" : "EndOfTrack",
      "name" : "C"
    },
    {
      "id" : "d4bc4295-3995-4f67-bf05-b8fafc95ea38",
      "nodeType" : "EndOfTrack",
      "name" : ""
    }
  ],
  "edges" : [
    {
      "id" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
      "from" : "4b3da0d8-60e4-4ba2-8d35-6696ff978ff2",
      "to" : "49f533f5-2b0b-48b8-9543-a9db3a930803",
      "length" : 7000.0,
      "name" : "",
      "points" : {
        "aba774e2-a12b-3596-bba0-49335a3eeab0" : {
          "offset" : {
            "meter" : 6900.0
          },
          "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
          "coordinate" : {
            "longitude" : 0.0,
            "latitude" : 0.0,
            "altitude" : 1.0
          }
        },
        "54dc9d1a-6d3a-3bb1-992c-adba35f2e758" : {
          "offset" : {
            "meter" : 5000.0
          },
          "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
          "coordinate" : {
            "longitude" : 0.0,
            "latitude" : 0.0,
            "altitude" : 1.0
          }
        },
        "5cc82c3b-d5d0-32d0-9c19-14ccd37f7ab3" : {
          "offset" : {
            "meter" : 7000.0
          },
          "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
          "coordinate" : {
            "longitude" : 0.0,
            "latitude" : 0.0,
            "altitude" : 1.0
          }
        },
        "1e00a692-c583-393c-93a2-6e383c81f0e0" : {
          "offset" : {
            "meter" : 200.0
          },
          "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
          "coordinate" : {
            "longitude" : 0.0,
            "latitude" : 0.0,
            "altitude" : 1.0
          }
        },
        "473297b7-7564-35f8-b75a-27ab4911ee8f" : {
          "offset" : {
            "meter" : 4800.0
          },
          "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
          "coordinate" : {
            "longitude" : 0.0,
            "latitude" : 0.0,
            "altitude" : 1.0
          }
        },
        "007c6010-675b-31ce-998a-8ff38d106316" : {
          "offset" : {
            "meter" : 0.0
          },
          "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
          "coordinate" : {
            "longitude" : 0.0,
            "latitude" : 0.0,
            "altitude" : 1.0
          }
        }
      },
      "directedPoints" : {
        "685d2faf-1afb-4d90-95d7-6984eba486e5" : {
          "direction" : "StartToEnd",
          "offset" : {
            "meter" : 100.0
          }
        },
        "44c92a23-8fa2-415a-82ec-cbfbc746c7c5" : {
          "direction" : "StartToEnd",
          "offset" : {
            "meter" : 4900.0
          }
        },
        "0ccc6894-fb22-40c0-8dc7-839b9da23568" : {
          "direction" : "EndToStart",
          "offset" : {
            "meter" : 50.0
          }
        },
        "86a32992-8668-4ca4-a820-f41a967c566c" : {
          "direction" : "EndToStart",
          "offset" : {
            "meter" : 4850.0
          }
        }
      },
      "timingPoints" : [
        {
          "id" : "18d49915-aaac-49ae-9d27-5a52318d9e5a",
          "directedPointRef" : "685d2faf-1afb-4d90-95d7-6984eba486e5",
          "timingPointIdentifier" : {
            "id" : 11,
            "originality" : {
              "Original" : {
                
              }
            }
          },
          "timingPointType" : "PassengerTrainStopLocation",
          "name" : "TP11",
          "stopLocationTolerance" : "M10",
          "stoppingPointReachedDistance" : "CM20"
        },
        {
          "id" : "2b2c7d81-35be-4b80-af71-5c043f585391",
          "directedPointRef" : "44c92a23-8fa2-415a-82ec-cbfbc746c7c5",
          "timingPointIdentifier" : {
            "id" : 21,
            "originality" : {
              "Original" : {
                
              }
            }
          },
          "timingPointType" : "PassengerTrainStopLocation",
          "name" : "TP21",
          "stopLocationTolerance" : "M10",
          "stoppingPointReachedDistance" : "CM20"
        },
        {
          "id" : "9e3d73dc-b596-4b83-8663-2e3bcccae291",
          "directedPointRef" : "0ccc6894-fb22-40c0-8dc7-839b9da23568",
          "timingPointIdentifier" : {
            "id" : 111,
            "originality" : {
              "Original" : {
                
              }
            }
          },
          "timingPointType" : "PassengerTrainStopLocation",
          "name" : "TP111",
          "stopLocationTolerance" : "M10",
          "stoppingPointReachedDistance" : "CM20"
        },
        {
          "id" : "f61115b2-02a2-49f3-a9b9-a45fce1c74f7",
          "directedPointRef" : "86a32992-8668-4ca4-a820-f41a967c566c",
          "timingPointIdentifier" : {
            "id" : 121,
            "originality" : {
              "Original" : {
                
              }
            }
          },
          "timingPointType" : "PassengerTrainStopLocation",
          "name" : "TP121",
          "stopLocationTolerance" : "M10",
          "stoppingPointReachedDistance" : "CM20"
        }
      ],
      "betriebsstellengrenzen" : {
        
      },
      "baliseGroups" : [
      ],
      "sections" : {
        "c946f0f7-8882-3c31-94b3-e670378ca8f4" : {
          "from" : {
            "offset" : {
              "meter" : 0.0
            },
            "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
            "coordinate" : {
              "longitude" : 0.0,
              "latitude" : 0.0,
              "altitude" : 1.0
            }
          },
          "to" : {
            "offset" : {
              "meter" : 7000.0
            },
            "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
            "coordinate" : {
              "longitude" : 0.0,
              "latitude" : 0.0,
              "altitude" : 1.0
            }
          },
          "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
        }
      },
      "curveSegments" : [
        {
          "CurveSegmentArc" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 7000.0
                },
                "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
            },
            "radiusStart" : 290.0,
            "radiusEnd" : 290.0
          }
        }
      ],
      "directedSections" : {
        "0a027a75-40f5-3fd6-bd81-dd4f9d6648f3" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 6900.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 7000.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
          },
          "direction" : "StartToEnd"
        },
        "eea919ba-3b23-308c-899f-2e1fde674e55" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 0.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 200.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
          },
          "direction" : "StartToEnd"
        },
        "32968a91-1f35-3220-8181-aa00d1069c86" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 0.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 7000.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
          },
          "direction" : "EndToStart"
        },
        "bec038c1-bd0b-3a10-b5c3-64a572c495e7" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 0.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 200.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
          },
          "direction" : "EndToStart"
        },
        "10d1a95f-3bb2-3f18-a7d7-2b1317e48b09" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 4800.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 5000.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
          },
          "direction" : "EndToStart"
        },
        "8f951903-ec84-334f-9436-aa36a7821348" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 6900.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 7000.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
          },
          "direction" : "EndToStart"
        },
        "a09adb41-3fe8-3fe4-9988-a4036f22c9dd" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 0.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 7000.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
          },
          "direction" : "StartToEnd"
        },
        "71c1cb07-9627-339b-943b-cec3edd946db" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 4800.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 5000.0
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
          },
          "direction" : "StartToEnd"
        }
      },
      "gradientSegments" : [
        {
          "GradientSegmentLine" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 7000.0
                },
                "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
            },
            "startAltitude" : 0.0,
            "gradient" : 0.0
          }
        }
      ],
      "etcsEdges" : {
        
      },
      "staticSpeedProfiles" : {
        "1f4065c8-c027-4e17-90dc-801deba5ac94" : {
          "velocity" : 60,
          "sectionRef" : "a09adb41-3fe8-3fe4-9988-a4036f22c9dd",
          "applySpeedProfileTo" : "TrainRearEnd"
        },
        "2258de9e-0aaa-4f3c-9958-b8cf8a31defd" : {
          "velocity" : 60,
          "sectionRef" : "32968a91-1f35-3220-8181-aa00d1069c86",
          "applySpeedProfileTo" : "TrainRearEnd"
        }
      },
      "axleLoadSpeedProfiles" : {
        
      },
      "specificStaticSpeedProfiles" : {
        
      },
      "nonPermittedBrakingTypes" : [
      ],
      "segmentProfiles" : [
        {
          "section" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 7000.0
                },
                "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
            },
            "direction" : "StartToEnd"
          },
          "id" : 1001,
          "distanceToEoA" : {
            "meter" : 10.0
          },
          "atoTs" : {
            "id" : 1,
            "countryId" : 96
          }
        },
        {
          "section" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 7000.0
                },
                "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "f1df5111-958f-415c-89e1-afc8e0a7b89b"
            },
            "direction" : "EndToStart"
          },
          "id" : 1008,
          "distanceToEoA" : {
            "meter" : 10.0
          },
          "atoTs" : {
            "id" : 1,
            "countryId" : 96
          }
        }
      ]
    },
    {
      "id" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
      "from" : "49f533f5-2b0b-48b8-9543-a9db3a930803",
      "to" : "cd5c3f84-9f86-4d92-876e-e23304df9385",
      "length" : 1000.0,
      "name" : "",
      "points" : {
        "2ff83b08-643b-3984-b3c3-ee5e413ee718" : {
          "offset" : {
            "meter" : 0.0
          },
          "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
          "coordinate" : {
            "longitude" : 0.0,
            "latitude" : 0.0,
            "altitude" : 1.0
          }
        },
        "c6be63e6-93fc-362b-ba0a-c0152b093ce5" : {
          "offset" : {
            "meter" : 1000.0
          },
          "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
          "coordinate" : {
            "longitude" : 0.0,
            "latitude" : 0.0,
            "altitude" : 1.0
          }
        }
      },
      "directedPoints" : {
        "d2d49ea4-350a-4fb6-abcb-d106760fe6f0" : {
          "direction" : "EndToStart",
          "offset" : {
            "meter" : 200.0
          }
        },
        "d560ee47-3d25-401b-b4c8-bef25fe57565" : {
          "direction" : "StartToEnd",
          "offset" : {
            "meter" : 900.0
          }
        }
      },
      "timingPoints" : [
        {
          "id" : "8677c412-0cb7-48a5-86d4-7abb506a78fe",
          "directedPointRef" : "d2d49ea4-350a-4fb6-abcb-d106760fe6f0",
          "timingPointIdentifier" : {
            "id" : 131,
            "originality" : {
              "Original" : {
                
              }
            }
          },
          "timingPointType" : "PassengerTrainStopLocation",
          "name" : "TP131",
          "stopLocationTolerance" : "M10",
          "stoppingPointReachedDistance" : "CM20"
        },
        {
          "id" : "81f6f95d-48a1-4b48-8df8-afa286ec24dd",
          "directedPointRef" : "d560ee47-3d25-401b-b4c8-bef25fe57565",
          "timingPointIdentifier" : {
            "id" : 31,
            "originality" : {
              "Original" : {
                
              }
            }
          },
          "timingPointType" : "PassengerTrainStopLocation",
          "name" : "TP31",
          "stopLocationTolerance" : "M10",
          "stoppingPointReachedDistance" : "CM20"
        }
      ],
      "betriebsstellengrenzen" : {
        
      },
      "baliseGroups" : [
      ],
      "sections" : {
        "9e30f547-f97a-312d-8dd6-fa8d240d33ec" : {
          "from" : {
            "offset" : {
              "meter" : 0.0
            },
            "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
            "coordinate" : {
              "longitude" : 0.0,
              "latitude" : 0.0,
              "altitude" : 1.0
            }
          },
          "to" : {
            "offset" : {
              "meter" : 1000.0
            },
            "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
            "coordinate" : {
              "longitude" : 0.0,
              "latitude" : 0.0,
              "altitude" : 1.0
            }
          },
          "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3"
        }
      },
      "curveSegments" : [
        {
          "CurveSegmentArc" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 1000.0
                },
                "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3"
            },
            "radiusStart" : 290.0,
            "radiusEnd" : 290.0
          }
        }
      ],
      "directedSections" : {
        "d3ef61ff-49cb-34f5-9557-1eeee0003d4d" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 0.0
              },
              "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 1000.0
              },
              "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3"
          },
          "direction" : "StartToEnd"
        },
        "c5f00dc2-9c92-37ac-91aa-c4db42c2782b" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 0.0
              },
              "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 1000.0
              },
              "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3"
          },
          "direction" : "EndToStart"
        }
      },
      "gradientSegments" : [
        {
          "GradientSegmentLine" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 1000.0
                },
                "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3"
            },
            "startAltitude" : 0.0,
            "gradient" : 0.0
          }
        }
      ],
      "etcsEdges" : {
        
      },
      "staticSpeedProfiles" : {
        "51b33616-6141-48cc-afe0-6a1707bbbccc" : {
          "velocity" : 60,
          "sectionRef" : "d3ef61ff-49cb-34f5-9557-1eeee0003d4d",
          "applySpeedProfileTo" : "TrainRearEnd"
        },
        "6e23265d-e6ab-4679-afaf-d28437c4cbae" : {
          "velocity" : 60,
          "sectionRef" : "c5f00dc2-9c92-37ac-91aa-c4db42c2782b",
          "applySpeedProfileTo" : "TrainRearEnd"
        }
      },
      "axleLoadSpeedProfiles" : {
        
      },
      "specificStaticSpeedProfiles" : {
        
      },
      "nonPermittedBrakingTypes" : [
      ],
      "segmentProfiles" : [
        {
          "section" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 1000.0
                },
                "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3"
            },
            "direction" : "StartToEnd"
          },
          "id" : 1003,
          "distanceToEoA" : {
            "meter" : 10.0
          },
          "atoTs" : {
            "id" : 1,
            "countryId" : 96
          }
        },
        {
          "section" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 1000.0
                },
                "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "c4070ff8-eb77-4820-a51e-41c066fc9bf3"
            },
            "direction" : "EndToStart"
          },
          "id" : 1005,
          "distanceToEoA" : {
            "meter" : 10.0
          },
          "atoTs" : {
            "id" : 1,
            "countryId" : 96
          }
        }
      ]
    },
    {
      "id" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
      "from" : "49f533f5-2b0b-48b8-9543-a9db3a930803",
      "to" : "d4bc4295-3995-4f67-bf05-b8fafc95ea38",
      "length" : 1000.0,
      "name" : "",
      "points" : {
        "d86e894c-dfdb-3d20-b0bd-89dd19bca870" : {
          "offset" : {
            "meter" : 0.0
          },
          "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
          "coordinate" : {
            "longitude" : 0.0,
            "latitude" : 0.0,
            "altitude" : 1.0
          }
        },
        "93a2a231-0703-39c2-bf0b-12fea8889a3a" : {
          "offset" : {
            "meter" : 1000.0
          },
          "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
          "coordinate" : {
            "longitude" : 0.0,
            "latitude" : 0.0,
            "altitude" : 1.0
          }
        }
      },
      "directedPoints" : {
        "f31cee1c-8415-42c2-8efb-6722e373f2e6" : {
          "direction" : "EndToStart",
          "offset" : {
            "meter" : 200.0
          }
        },
        "8be9c205-83e9-4ef8-ba08-d1bb3b540149" : {
          "direction" : "StartToEnd",
          "offset" : {
            "meter" : 900.0
          }
        }
      },
      "timingPoints" : [
        {
          "id" : "f73426b6-4453-4655-acb3-3ad1b832fca9",
          "directedPointRef" : "f31cee1c-8415-42c2-8efb-6722e373f2e6",
          "timingPointIdentifier" : {
            "id" : 132,
            "originality" : {
              "Original" : {
                
              }
            }
          },
          "timingPointType" : "PassengerTrainStopLocation",
          "name" : "TP132",
          "stopLocationTolerance" : "M10",
          "stoppingPointReachedDistance" : "CM20"
        },
        {
          "id" : "a09f7134-3d46-4cf6-b68a-d0db33c778f7",
          "directedPointRef" : "8be9c205-83e9-4ef8-ba08-d1bb3b540149",
          "timingPointIdentifier" : {
            "id" : 32,
            "originality" : {
              "Original" : {
                
              }
            }
          },
          "timingPointType" : "PassengerTrainStopLocation",
          "name" : "TP32",
          "stopLocationTolerance" : "M10",
          "stoppingPointReachedDistance" : "CM20"
        }
      ],
      "betriebsstellengrenzen" : {
        
      },
      "baliseGroups" : [
      ],
      "sections" : {
        "459827b1-2e41-3c40-97b1-caf7b9968f7f" : {
          "from" : {
            "offset" : {
              "meter" : 0.0
            },
            "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
            "coordinate" : {
              "longitude" : 0.0,
              "latitude" : 0.0,
              "altitude" : 1.0
            }
          },
          "to" : {
            "offset" : {
              "meter" : 1000.0
            },
            "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
            "coordinate" : {
              "longitude" : 0.0,
              "latitude" : 0.0,
              "altitude" : 1.0
            }
          },
          "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0"
        }
      },
      "curveSegments" : [
        {
          "CurveSegmentArc" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 1000.0
                },
                "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0"
            },
            "radiusStart" : 290.0,
            "radiusEnd" : 290.0
          }
        }
      ],
      "directedSections" : {
        "18f8ad86-32e0-3fb3-bfe5-3366da905d4c" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 0.0
              },
              "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 1000.0
              },
              "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0"
          },
          "direction" : "StartToEnd"
        },
        "0af42be0-e20d-336e-88a7-205d8eee1324" : {
          "section" : {
            "from" : {
              "offset" : {
                "meter" : 0.0
              },
              "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "to" : {
              "offset" : {
                "meter" : 1000.0
              },
              "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
              "coordinate" : {
                "longitude" : 0.0,
                "latitude" : 0.0,
                "altitude" : 1.0
              }
            },
            "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0"
          },
          "direction" : "EndToStart"
        }
      },
      "gradientSegments" : [
        {
          "GradientSegmentLine" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 1000.0
                },
                "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0"
            },
            "startAltitude" : 0.0,
            "gradient" : 0.0
          }
        }
      ],
      "etcsEdges" : {
        
      },
      "staticSpeedProfiles" : {
        "cdc5b9ae-24a3-4c95-a02d-2b52dcb18b47" : {
          "velocity" : 60,
          "sectionRef" : "18f8ad86-32e0-3fb3-bfe5-3366da905d4c",
          "applySpeedProfileTo" : "TrainRearEnd"
        },
        "a78f9466-6a6b-4086-bce8-f75277bb380d" : {
          "velocity" : 60,
          "sectionRef" : "0af42be0-e20d-336e-88a7-205d8eee1324",
          "applySpeedProfileTo" : "TrainRearEnd"
        }
      },
      "axleLoadSpeedProfiles" : {
        
      },
      "specificStaticSpeedProfiles" : {
        
      },
      "nonPermittedBrakingTypes" : [
      ],
      "segmentProfiles" : [
        {
          "section" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 1000.0
                },
                "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0"
            },
            "direction" : "StartToEnd"
          },
          "id" : 1004,
          "distanceToEoA" : {
            "meter" : 10.0
          },
          "atoTs" : {
            "id" : 1,
            "countryId" : 96
          }
        },
        {
          "section" : {
            "section" : {
              "from" : {
                "offset" : {
                  "meter" : 0.0
                },
                "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "to" : {
                "offset" : {
                  "meter" : 1000.0
                },
                "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0",
                "coordinate" : {
                  "longitude" : 0.0,
                  "latitude" : 0.0,
                  "altitude" : 1.0
                }
              },
              "trackEdgeRef" : "e4496a05-90cd-4e19-9f97-688dfd8f91b0"
            },
            "direction" : "EndToStart"
          },
          "id" : 1006,
          "distanceToEoA" : {
            "meter" : 10.0
          },
          "atoTs" : {
            "id" : 1,
            "countryId" : 96
          }
        }
      ]
    }
  ]    
};