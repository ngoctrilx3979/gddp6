TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 130,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 130,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMax": 130,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E"
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 130,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48"
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "hfovMax": 130,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF"
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "hfovMax": 130,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F"
                  }
                 ],
                 "id": "panorama_DD1817DC_D089_9853_4191_0E9B9E428066",
                 "hfovMin": 60,
                 "pitch": 0,
                 "vfov": 180,
                 "hfov": 360,
                 "thumbnailUrl": "media/panorama_DD1817DC_D089_9853_4191_0E9B9E428066_t.jpg",
                 "label": "IMG_20260118_153010_307",
                 "frames": [
                  {
                   "overlays": [
                    {
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "pitch": -6.23,
                       "yaw": -109.78,
                       "image": {
                        "colCount": 4,
                        "levels": [
                         {
                          "url": "media/panorama_DD1817DC_D089_9853_4191_0E9B9E428066_0_HS_0_0.png",
                          "width": 400,
                          "class": "ImageResourceLevel",
                          "height": 360
                         }
                        ],
                        "rowCount": 6,
                        "frameCount": 24,
                        "frameDuration": 41,
                        "class": "AnimatedImageResource"
                       },
                       "hfov": 15.69,
                       "distance": 100,
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "rollOverDisplay": false,
                     "maps": [],
                     "id": "overlay_C20A28A9_D088_88F5_41E4_69C570DEABF8",
                     "data": {
                      "label": "Image"
                     },
                     "areas": [
                      {
                       "mapColor": "image",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F, this.camera_CD2B575C_DB0A_4AF7_41D3_B7862FB0EB51); this.mainPlayList.set('selectedIndex', 3)"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay"
                    }
                   ],
                   "thumbnailUrl": "media/panorama_DD1817DC_D089_9853_4191_0E9B9E428066_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "levels": [
                     {
                      "url": "media/panorama_DD1817DC_D089_9853_4191_0E9B9E428066_hq.jpeg",
                      "width": 6080,
                      "class": "ImageResourceLevel",
                      "height": 3040
                     },
                     {
                      "url": "media/panorama_DD1817DC_D089_9853_4191_0E9B9E428066_lq.jpeg",
                      "width": 2048,
                      "tags": "preload",
                      "class": "ImageResourceLevel",
                      "height": 1024
                     },
                     {
                      "url": "media/panorama_DD1817DC_D089_9853_4191_0E9B9E428066.jpeg",
                      "width": 4002,
                      "class": "ImageResourceLevel",
                      "height": 2001
                     }
                    ],
                    "class": "ImageResource"
                   }
                  }
                 ],
                 "partial": false,
                 "class": "Panorama"
                }
               }
              ],
              "id": "panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F",
              "hfovMin": 60,
              "pitch": 0,
              "vfov": 180,
              "hfov": 360,
              "thumbnailUrl": "media/panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F_t.jpg",
              "label": "IMG_20260118_153000_569",
              "frames": [
               {
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "pitch": -25.45,
                    "yaw": -8.06,
                    "image": {
                     "colCount": 4,
                     "levels": [
                      {
                       "url": "media/panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F_0_HS_0_0.png",
                       "width": 400,
                       "class": "ImageResourceLevel",
                       "height": 360
                      }
                     ],
                     "rowCount": 6,
                     "frameCount": 24,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource"
                    },
                    "hfov": 15.49,
                    "distance": 100,
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "rollOverDisplay": false,
                  "maps": [],
                  "id": "overlay_C28CEE4D_D089_884D_41EA_10BEE62832C5",
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_DD1817DC_D089_9853_4191_0E9B9E428066, this.camera_CD063799_DB0A_4A71_41E9_7B3F6800D6E8); this.mainPlayList.set('selectedIndex', 2)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay"
                 },
                 {
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "pitch": -27.16,
                    "yaw": 88.51,
                    "image": {
                     "colCount": 4,
                     "levels": [
                      {
                       "url": "media/panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F_0_HS_1_0.png",
                       "width": 400,
                       "class": "ImageResourceLevel",
                       "height": 360
                      }
                     ],
                     "rowCount": 6,
                     "frameCount": 24,
                     "frameDuration": 41,
                     "class": "AnimatedImageResource"
                    },
                    "hfov": 15.27,
                    "distance": 100,
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "rollOverDisplay": false,
                  "maps": [],
                  "id": "overlay_C4E10722_D088_99F7_41E6_FDC877F07AEE",
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "image",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF, this.camera_CD08E799_DB0A_4A71_41E1_C460DF4D80AE); this.mainPlayList.set('selectedIndex', 1)"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay"
                 }
                ],
                "thumbnailUrl": "media/panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "levels": [
                  {
                   "url": "media/panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F_hq.jpeg",
                   "width": 6080,
                   "class": "ImageResourceLevel",
                   "height": 3040
                  },
                  {
                   "url": "media/panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F_lq.jpeg",
                   "width": 2048,
                   "tags": "preload",
                   "class": "ImageResourceLevel",
                   "height": 1024
                  },
                  {
                   "url": "media/panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F.jpeg",
                   "width": 4002,
                   "class": "ImageResourceLevel",
                   "height": 2001
                  }
                 ],
                 "class": "ImageResource"
                }
               }
              ],
              "partial": false,
              "class": "Panorama"
             }
            }
           ],
           "id": "panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF",
           "hfovMin": 60,
           "pitch": 0,
           "vfov": 180,
           "hfov": 360,
           "thumbnailUrl": "media/panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF_t.jpg",
           "label": "IMG_20260118_153031_765",
           "frames": [
            {
             "overlays": [
              {
               "enabledInCardboard": true,
               "items": [
                {
                 "pitch": -12.75,
                 "yaw": 6.07,
                 "image": {
                  "colCount": 4,
                  "levels": [
                   {
                    "url": "media/panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF_0_HS_0_0.png",
                    "width": 400,
                    "class": "ImageResourceLevel",
                    "height": 360
                   }
                  ],
                  "rowCount": 6,
                  "frameCount": 24,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource"
                 },
                 "hfov": 10.58,
                 "distance": 100,
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "rollOverDisplay": false,
               "maps": [],
               "id": "overlay_C141267F_D08B_B84E_41E6_F634F43E3272",
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48, this.camera_CD7CC7A9_DB0A_4A51_41B1_EC634A94D4FC); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay"
              },
              {
               "enabledInCardboard": true,
               "items": [
                {
                 "pitch": -13.02,
                 "yaw": -168.73,
                 "image": {
                  "colCount": 4,
                  "levels": [
                   {
                    "url": "media/panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF_0_HS_1_0.png",
                    "width": 400,
                    "class": "ImageResourceLevel",
                    "height": 360
                   }
                  ],
                  "rowCount": 6,
                  "frameCount": 24,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource"
                 },
                 "hfov": 13.24,
                 "distance": 100,
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "rollOverDisplay": false,
               "maps": [],
               "id": "overlay_C17B4140_D088_99B3_41E9_51132C162458",
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F, this.camera_CD6A37D8_DB0A_49FF_41DA_35131C6C621B); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "thumbnailUrl": "media/panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "levels": [
               {
                "url": "media/panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF_hq.jpeg",
                "width": 6080,
                "class": "ImageResourceLevel",
                "height": 3040
               },
               {
                "url": "media/panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF_lq.jpeg",
                "width": 2048,
                "tags": "preload",
                "class": "ImageResourceLevel",
                "height": 1024
               },
               {
                "url": "media/panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF.jpeg",
                "width": 4002,
                "class": "ImageResourceLevel",
                "height": 2001
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "partial": false,
           "class": "Panorama"
          }
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "hfovMax": 130,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48"
            }
           ],
           "id": "panorama_DD182F58_D089_8853_41D9_FA535D4ED929",
           "hfovMin": 60,
           "pitch": 0,
           "vfov": 180,
           "hfov": 360,
           "thumbnailUrl": "media/panorama_DD182F58_D089_8853_41D9_FA535D4ED929_t.jpg",
           "label": "IMG_20260118_152906_083",
           "frames": [
            {
             "overlays": [
              {
               "enabledInCardboard": true,
               "items": [
                {
                 "pitch": -7.6,
                 "yaw": -93.04,
                 "image": {
                  "colCount": 4,
                  "levels": [
                   {
                    "url": "media/panorama_DD182F58_D089_8853_41D9_FA535D4ED929_0_HS_0_0.png",
                    "width": 400,
                    "class": "ImageResourceLevel",
                    "height": 360
                   }
                  ],
                  "rowCount": 6,
                  "frameCount": 24,
                  "frameDuration": 41,
                  "class": "AnimatedImageResource"
                 },
                 "hfov": 12.38,
                 "distance": 100,
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "rollOverDisplay": false,
               "maps": [],
               "id": "overlay_DFB85E11_D088_8BD5_41E4_BE39FD790F33",
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "image",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48, this.camera_CD608809_DB0A_4651_41D3_4912D19AF122); this.mainPlayList.set('selectedIndex', 5)"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay"
              }
             ],
             "thumbnailUrl": "media/panorama_DD182F58_D089_8853_41D9_FA535D4ED929_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "levels": [
               {
                "url": "media/panorama_DD182F58_D089_8853_41D9_FA535D4ED929_hq.jpeg",
                "width": 6080,
                "class": "ImageResourceLevel",
                "height": 3040
               },
               {
                "url": "media/panorama_DD182F58_D089_8853_41D9_FA535D4ED929_lq.jpeg",
                "width": 2048,
                "tags": "preload",
                "class": "ImageResourceLevel",
                "height": 1024
               },
               {
                "url": "media/panorama_DD182F58_D089_8853_41D9_FA535D4ED929.jpeg",
                "width": 4002,
                "class": "ImageResourceLevel",
                "height": 2001
               }
              ],
              "class": "ImageResource"
             }
            }
           ],
           "partial": false,
           "class": "Panorama"
          }
         }
        ],
        "id": "panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48",
        "hfovMin": 60,
        "pitch": 0,
        "vfov": 180,
        "hfov": 360,
        "thumbnailUrl": "media/panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_t.jpg",
        "label": "IMG_20260118_152927_566",
        "frames": [
         {
          "overlays": [
           {
            "enabledInCardboard": true,
            "items": [
             {
              "pitch": -10,
              "yaw": -167.99,
              "image": {
               "colCount": 4,
               "levels": [
                {
                 "url": "media/panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_0_HS_0_0.png",
                 "width": 400,
                 "class": "ImageResourceLevel",
                 "height": 360
                }
               ],
               "rowCount": 6,
               "frameCount": 24,
               "frameDuration": 41,
               "class": "AnimatedImageResource"
              },
              "hfov": 13.38,
              "distance": 100,
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "rollOverDisplay": false,
            "maps": [],
            "id": "overlay_C0DEBB54_D088_8853_41B7_383E94502129",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_DD182F58_D089_8853_41D9_FA535D4ED929, this.camera_CD33275C_DB0A_4AF7_41A3_9743D55B1CCF); this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "enabledInCardboard": true,
            "items": [
             {
              "pitch": -12.82,
              "yaw": 5.34,
              "image": {
               "colCount": 4,
               "levels": [
                {
                 "url": "media/panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_0_HS_1_0.png",
                 "width": 400,
                 "class": "ImageResourceLevel",
                 "height": 360
                }
               ],
               "rowCount": 6,
               "frameCount": 24,
               "frameDuration": 41,
               "class": "AnimatedImageResource"
              },
              "hfov": 14.05,
              "distance": 100,
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "rollOverDisplay": false,
            "maps": [],
            "id": "overlay_C18E340C_D088_9FB3_419B_0929FDB175DA",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF, this.camera_CD3F074C_DB0A_4AD7_41CF_28C67A43F2F0); this.mainPlayList.set('selectedIndex', 1)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay"
           },
           {
            "enabledInCardboard": true,
            "items": [
             {
              "pitch": -23.32,
              "yaw": 92.04,
              "image": {
               "colCount": 4,
               "levels": [
                {
                 "url": "media/panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_0_HS_2_0.png",
                 "width": 400,
                 "class": "ImageResourceLevel",
                 "height": 360
                }
               ],
               "rowCount": 6,
               "frameCount": 24,
               "frameDuration": 41,
               "class": "AnimatedImageResource"
              },
              "hfov": 12.73,
              "distance": 100,
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "rollOverDisplay": false,
            "maps": [],
            "id": "overlay_C13737DF_D089_F84E_41DE_6C013DBA4572",
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "image",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E, this.camera_CD3A973C_DB0A_4AB7_41E1_E061C6082C21); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay"
           }
          ],
          "thumbnailUrl": "media/panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "levels": [
            {
             "url": "media/panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_hq.jpeg",
             "width": 6080,
             "class": "ImageResourceLevel",
             "height": 3040
            },
            {
             "url": "media/panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_lq.jpeg",
             "width": 2048,
             "tags": "preload",
             "class": "ImageResourceLevel",
             "height": 1024
            },
            {
             "url": "media/panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48.jpeg",
             "width": 4002,
             "class": "ImageResourceLevel",
             "height": 2001
            }
           ],
           "class": "ImageResource"
          }
         }
        ],
        "partial": false,
        "class": "Panorama"
       }
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_DEE941F0_D088_7853_41E4_65B7D602E28A"
      }
     ],
     "id": "panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E",
     "hfovMin": 60,
     "pitch": 0,
     "vfov": 180,
     "hfov": 360,
     "thumbnailUrl": "media/panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E_t.jpg",
     "label": "IMG_20260118_152939_911",
     "frames": [
      {
       "overlays": [
        {
         "enabledInCardboard": true,
         "items": [
          {
           "pitch": -48.03,
           "yaw": 104.16,
           "image": {
            "colCount": 4,
            "levels": [
             {
              "url": "media/panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E_0_HS_0_0.png",
              "width": 400,
              "class": "ImageResourceLevel",
              "height": 360
             }
            ],
            "rowCount": 6,
            "frameCount": 24,
            "frameDuration": 41,
            "class": "AnimatedImageResource"
           },
           "hfov": 11.48,
           "distance": 100,
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "rollOverDisplay": false,
         "maps": [],
         "id": "overlay_C1B262F0_D088_B853_41DC_85375C75A9C2",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_DEE941F0_D088_7853_41E4_65B7D602E28A, this.camera_CD25F782_DB0A_4A50_41D9_87A46C4FECC5); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay"
        },
        {
         "enabledInCardboard": true,
         "items": [
          {
           "pitch": -10.69,
           "yaw": -174.39,
           "image": {
            "colCount": 4,
            "levels": [
             {
              "url": "media/panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E_0_HS_1_0.png",
              "width": 400,
              "class": "ImageResourceLevel",
              "height": 360
             }
            ],
            "rowCount": 6,
            "frameCount": 24,
            "frameDuration": 41,
            "class": "AnimatedImageResource"
           },
           "hfov": 14.7,
           "distance": 100,
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "rollOverDisplay": false,
         "maps": [],
         "id": "overlay_C1B20840_D088_97B3_41D6_AE906E7341B2",
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "image",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48, this.camera_CD2D576C_DB0A_4AD7_41DC_B3CFEC798ADD); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay"
        }
       ],
       "thumbnailUrl": "media/panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "levels": [
         {
          "url": "media/panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E_hq.jpeg",
          "width": 6080,
          "class": "ImageResourceLevel",
          "height": 3040
         },
         {
          "url": "media/panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E_lq.jpeg",
          "width": 2048,
          "tags": "preload",
          "class": "ImageResourceLevel",
          "height": 1024
         },
         {
          "url": "media/panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E.jpeg",
          "width": 4002,
          "class": "ImageResourceLevel",
          "height": 2001
         }
        ],
        "class": "ImageResource"
       }
      }
     ],
     "partial": false,
     "class": "Panorama"
    }
   }
  ],
  "id": "panorama_DEE941F0_D088_7853_41E4_65B7D602E28A",
  "hfovMin": 60,
  "pitch": 0,
  "vfov": 180,
  "hfov": 360,
  "thumbnailUrl": "media/panorama_DEE941F0_D088_7853_41E4_65B7D602E28A_t.jpg",
  "label": "IMG_20260118_152950_190",
  "frames": [
   {
    "overlays": [
     {
      "enabledInCardboard": true,
      "items": [
       {
        "pitch": -31.33,
        "yaw": -168.07,
        "image": {
         "colCount": 4,
         "levels": [
          {
           "url": "media/panorama_DEE941F0_D088_7853_41E4_65B7D602E28A_0_HS_0_0.png",
           "width": 400,
           "class": "ImageResourceLevel",
           "height": 360
          }
         ],
         "rowCount": 6,
         "frameCount": 24,
         "frameDuration": 41,
         "class": "AnimatedImageResource"
        },
        "hfov": 18.59,
        "distance": 100,
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "rollOverDisplay": false,
      "maps": [],
      "id": "overlay_C4A1C269_D098_7875_4191_FEDDE792B3E9",
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E, this.camera_CD13E78F_DB0A_4A51_41E9_0F924B9B3033); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay"
     }
    ],
    "thumbnailUrl": "media/panorama_DEE941F0_D088_7853_41E4_65B7D602E28A_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "url": "media/panorama_DEE941F0_D088_7853_41E4_65B7D602E28A_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel",
       "height": 3040
      },
      {
       "url": "media/panorama_DEE941F0_D088_7853_41E4_65B7D602E28A_lq.jpeg",
       "width": 2048,
       "tags": "preload",
       "class": "ImageResourceLevel",
       "height": 1024
      },
      {
       "url": "media/panorama_DEE941F0_D088_7853_41E4_65B7D602E28A.jpeg",
       "width": 4002,
       "class": "ImageResourceLevel",
       "height": 2001
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "partial": false,
  "class": "Panorama"
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonToggleHotspots": {
   "mode": "toggle",
   "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
   "paddingLeft": 0,
   "height": 58,
   "width": 58,
   "borderRadius": 0,
   "propagateClick": false,
   "backgroundOpacity": 0,
   "paddingRight": 0,
   "transparencyActive": true,
   "shadow": false,
   "class": "IconButton",
   "paddingTop": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
   "horizontalAlign": "center",
   "minHeight": 1,
   "data": {
    "name": "IconButton HS "
   },
   "maxWidth": 58,
   "minWidth": 1,
   "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
   "borderSize": 0,
   "maxHeight": 58
  },
  "buttonCardboardView": [
   {
    "right": 30,
    "mode": "push",
    "paddingLeft": 0,
    "height": 37,
    "width": 49,
    "propagateClick": false,
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "transparencyActive": true,
    "shadow": false,
    "class": "IconButton",
    "paddingTop": 0,
    "cursor": "hand",
    "bottom": 8,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
    "horizontalAlign": "center",
    "minHeight": 1,
    "data": {
     "name": "IconButton VR"
    },
    "maxWidth": 49,
    "minWidth": 1,
    "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
    "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
    "borderSize": 0,
    "maxHeight": 37
   },
   {
    "mode": "push",
    "paddingLeft": 0,
    "height": 58,
    "width": 58,
    "borderRadius": 0,
    "propagateClick": false,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "transparencyActive": true,
    "shadow": false,
    "class": "IconButton",
    "paddingTop": 0,
    "cursor": "hand",
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
    "horizontalAlign": "center",
    "minHeight": 1,
    "data": {
     "name": "IconButton VR"
    },
    "maxWidth": 58,
    "minWidth": 1,
    "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
    "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
    "visible": false,
    "borderSize": 0,
    "maxHeight": 58
   }
  ],
  "mouseControlMode": "drag_acceleration",
  "buttonToggleGyroscope": {
   "mode": "toggle",
   "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
   "paddingLeft": 0,
   "height": 58,
   "width": 58,
   "borderRadius": 0,
   "propagateClick": false,
   "backgroundOpacity": 0,
   "paddingRight": 0,
   "transparencyActive": true,
   "shadow": false,
   "class": "IconButton",
   "paddingTop": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "verticalAlign": "middle",
   "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
   "horizontalAlign": "center",
   "minHeight": 1,
   "data": {
    "name": "IconButton GYRO"
   },
   "maxWidth": 58,
   "minWidth": 1,
   "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
   "borderSize": 0,
   "maxHeight": 58
  },
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "panorama_DEE941F0_D088_7853_41E4_65B7D602E28A_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_DD1817DC_D089_9853_4191_0E9B9E428066",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "panorama_DD1817DC_D089_9853_4191_0E9B9E428066_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 "this.panorama_DD182F58_D089_8853_41D9_FA535D4ED929",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "hfov": 120,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "panorama_DD182F58_D089_8853_41D9_FA535D4ED929_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_DEE941F0_D088_7853_41E4_65B7D602E28A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DEE941F0_D088_7853_41E4_65B7D602E28A_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_DD1817DC_D089_9853_4191_0E9B9E428066",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD1817DC_D089_9853_4191_0E9B9E428066_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "end": "this.trigger('tourEnded')",
    "media": "this.panorama_DD182F58_D089_8853_41D9_FA535D4ED929",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD182F58_D089_8853_41D9_FA535D4ED929_camera"
   }
  ],
  "class": "PlayList"
 },
 {
  "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
    "media": "this.panorama_DEE941F0_D088_7853_41E4_65B7D602E28A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DEE941F0_D088_7853_41E4_65B7D602E28A_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
    "media": "this.panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
    "media": "this.panorama_DD1817DC_D089_9853_4191_0E9B9E428066",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD1817DC_D089_9853_4191_0E9B9E428066_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
    "media": "this.panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
    "media": "this.panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
    "media": "this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 0)",
    "media": "this.panorama_DD182F58_D089_8853_41D9_FA535D4ED929",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD182F58_D089_8853_41D9_FA535D4ED929_camera"
   }
  ],
  "class": "PlayList"
 },
 {
  "id": "ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 0, 1)",
    "media": "this.panorama_DEE941F0_D088_7853_41E4_65B7D602E28A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DEE941F0_D088_7853_41E4_65B7D602E28A_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 1, 2)",
    "media": "this.panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD2617B3_D089_B8D5_41C2_4CA407E0FCBF_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 2, 3)",
    "media": "this.panorama_DD1817DC_D089_9853_4191_0E9B9E428066",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD1817DC_D089_9853_4191_0E9B9E428066_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 3, 4)",
    "media": "this.panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD2945AC_D089_F8F2_41C9_1423DB83974F_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 4, 5)",
    "media": "this.panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD18742E_D089_9FCE_41D1_A13E80D6B38E_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 5, 6)",
    "media": "this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD2801B9_D089_B8D5_41C1_0456FAA76E48_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist, 6, 0)",
    "media": "this.panorama_DD182F58_D089_8853_41D9_FA535D4ED929",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DD182F58_D089_8853_41D9_FA535D4ED929_camera"
   }
  ],
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 5.61,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD3A973C_DB0A_4AB7_41E1_E061C6082C21",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -173.93,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD3F074C_DB0A_4AD7_41CF_28C67A43F2F0",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 86.96,
   "hfov": 120,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD33275C_DB0A_4AF7_41A3_9743D55B1CCF",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 171.94,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD2B575C_DB0A_4AF7_41D3_B7862FB0EB51",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -87.96,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD2D576C_DB0A_4AD7_41DC_B3CFEC798ADD",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 11.93,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD25F782_DB0A_4A50_41D9_87A46C4FECC5",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -75.84,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD13E78F_DB0A_4A51_41E9_0F924B9B3033",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 11.27,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD08E799_DB0A_4A71_41E1_C460DF4D80AE",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 70.22,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD063799_DB0A_4A71_41E9_7B3F6800D6E8",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -174.66,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD7CC7A9_DB0A_4A51_41B1_EC634A94D4FC",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -91.49,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD6A37D8_DB0A_49FF_41DA_35131C6C621B",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 12.01,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  },
  "id": "camera_CD608809_DB0A_4651_41D3_4912D19AF122",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "toolTipOpacity": 0.5,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 7,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "progressRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "borderSize": 0,
  "playbackBarRight": 0,
  "paddingLeft": 0,
  "progressBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderColor": "#000000",
  "progressHeight": 10,
  "playbackBarBottom": 5,
  "progressBorderSize": 0,
  "playbackBarLeft": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressLeft": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingRight": 0,
  "playbackBarBorderSize": 0,
  "shadow": false,
  "progressOpacity": 1,
  "class": "ViewerArea",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingRight": 10,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "minWidth": 100,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadHeight": 15,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowColor": "#000000",
  "transitionDuration": 500,
  "progressBarBorderRadius": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadow": true,
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 7,
  "toolTipBackgroundColor": "#000000",
  "toolTipFontStyle": "normal",
  "playbackBarBorderColor": "#FFFFFF",
  "paddingTop": 0,
  "height": "100%",
  "toolTipBorderRadius": 3,
  "toolTipFontFamily": "Georgia",
  "propagateClick": false,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarHeadBorderSize": 0,
  "borderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipShadowColor": "#333333",
  "toolTipFontWeight": "normal",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "progressBarBorderColor": "#000000",
  "width": "100%",
  "top": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipDisplayTime": 600,
  "toolTipPaddingLeft": 10,
  "paddingBottom": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "id": "MainViewer",
  "progressBorderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadWidth": 6,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "playbackBarHeight": 10,
  "minHeight": 50,
  "transitionMode": "blending",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontSize": 13,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarProgressBorderColor": "#000000",
  "left": 0,
  "toolTipShadowOpacity": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1
 },
 {
  "contentOpaque": false,
  "children": [
   {
    "right": "0%",
    "paddingLeft": 0,
    "height": 109,
    "url": "skin/Image_956B652D_9B4E_3642_41E3_43116695C719.png",
    "paddingTop": 0,
    "borderRadius": 0,
    "propagateClick": false,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "scaleMode": "fill",
    "shadow": false,
    "class": "Image",
    "bottom": "0%",
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "id": "Image_956B652D_9B4E_3642_41E3_43116695C719",
    "horizontalAlign": "center",
    "minHeight": 1,
    "data": {
     "name": "Gradient"
    },
    "minWidth": 1,
    "borderSize": 0,
    "left": "0%"
   },
   {
    "right": "0%",
    "paddingTop": 0,
    "paddingLeft": 0,
    "height": 2,
    "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
    "borderRadius": 0,
    "propagateClick": false,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "scaleMode": "fit_outside",
    "shadow": false,
    "class": "Image",
    "bottom": 53,
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
    "horizontalAlign": "center",
    "minHeight": 1,
    "data": {
     "name": "WHITE LINE"
    },
    "maxWidth": 3000,
    "minWidth": 1,
    "left": "0%",
    "borderSize": 0,
    "maxHeight": 2
   },
   "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
  ],
  "right": "0%",
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "overflow": "visible",
  "paddingLeft": 0,
  "gap": 10,
  "height": "12.832%",
  "paddingTop": 0,
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "propagateClick": false,
  "shadow": false,
  "class": "Container",
  "layout": "absolute",
  "bottom": "0%",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "horizontalAlign": "left",
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "data": {
   "name": "---BUTTON SET"
  },
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "borderSize": 0,
  "left": "0%"
 },
 {
  "children": [
   {
    "children": [
     {
      "mode": "toggle",
      "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
      "paddingLeft": 0,
      "height": 60,
      "width": 60,
      "borderRadius": 0,
      "propagateClick": false,
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "transparencyActive": true,
      "shadow": false,
      "class": "IconButton",
      "paddingTop": 0,
      "cursor": "hand",
      "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
      "horizontalAlign": "center",
      "minHeight": 1,
      "data": {
       "name": "image button menu"
      },
      "maxWidth": 60,
      "minWidth": 1,
      "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
      "borderSize": 0,
      "maxHeight": 60
     }
    ],
    "right": "0%",
    "creationPolicy": "delayed",
    "overflow": "visible",
    "paddingLeft": 0,
    "gap": 10,
    "height": 110,
    "width": 110,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "shadow": false,
    "class": "Container",
    "paddingTop": 0,
    "top": "0%",
    "layout": "horizontal",
    "paddingBottom": 0,
    "verticalAlign": "middle",
    "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "data": {
     "name": "button menu sup"
    },
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "center",
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "contentOpaque": false
   },
   {
    "children": [
     "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
     "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
     {
      "mode": "toggle",
      "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
      "paddingLeft": 0,
      "height": 58,
      "width": 58,
      "borderRadius": 0,
      "propagateClick": false,
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "transparencyActive": true,
      "shadow": false,
      "class": "IconButton",
      "paddingTop": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
      "horizontalAlign": "center",
      "minHeight": 1,
      "data": {
       "name": "IconButton MUTE"
      },
      "maxWidth": 58,
      "minWidth": 1,
      "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
      "borderSize": 0,
      "maxHeight": 58
     },
     "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
     {
      "mode": "toggle",
      "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
      "paddingLeft": 0,
      "height": 58,
      "width": 58,
      "borderRadius": 0,
      "propagateClick": false,
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "transparencyActive": true,
      "shadow": false,
      "class": "IconButton",
      "paddingTop": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
      "horizontalAlign": "center",
      "minHeight": 1,
      "data": {
       "name": "IconButton FULLSCREEN"
      },
      "maxWidth": 58,
      "minWidth": 1,
      "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
      "borderSize": 0,
      "maxHeight": 58
     },
     {
      "mode": "push",
      "paddingLeft": 0,
      "height": 58,
      "width": 58,
      "borderRadius": 0,
      "propagateClick": false,
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "transparencyActive": true,
      "shadow": false,
      "class": "IconButton",
      "paddingTop": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
      "horizontalAlign": "center",
      "minHeight": 1,
      "data": {
       "name": "IconButton TWITTER"
      },
      "maxWidth": 58,
      "minWidth": 1,
      "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
      "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
      "borderSize": 0,
      "maxHeight": 58
     },
     {
      "mode": "push",
      "paddingLeft": 0,
      "height": 58,
      "width": 58,
      "borderRadius": 0,
      "propagateClick": false,
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "transparencyActive": true,
      "shadow": false,
      "class": "IconButton",
      "paddingTop": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
      "horizontalAlign": "center",
      "minHeight": 1,
      "data": {
       "name": "IconButton FB"
      },
      "maxWidth": 58,
      "minWidth": 1,
      "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
      "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
      "borderSize": 0,
      "maxHeight": 58
     }
    ],
    "right": "0%",
    "creationPolicy": "delayed",
    "overflow": "scroll",
    "paddingLeft": 0,
    "gap": 3,
    "height": "85.959%",
    "paddingTop": 0,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "backgroundOpacity": 0,
    "paddingRight": 0,
    "shadow": false,
    "class": "Container",
    "bottom": "0%",
    "paddingBottom": 0,
    "verticalAlign": "top",
    "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
    "horizontalAlign": "center",
    "minHeight": 1,
    "width": "91.304%",
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "layout": "vertical",
    "data": {
     "name": "-button set"
    },
    "scrollBarVisible": "rollOver",
    "scrollBarColor": "#000000",
    "visible": false,
    "scrollBarWidth": 10,
    "borderSize": 0,
    "contentOpaque": false
   }
  ],
  "right": "0%",
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "overflow": "scroll",
  "paddingLeft": 0,
  "gap": 10,
  "height": 641,
  "width": 115.05,
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "propagateClick": false,
  "shadow": false,
  "class": "Container",
  "paddingTop": 0,
  "top": "0%",
  "layout": "absolute",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "data": {
   "name": "-- SETTINGS"
  },
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "borderSize": 0,
  "contentOpaque": false
 },
 {
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "overflow": "visible",
  "paddingLeft": 0,
  "gap": 10,
  "height": 80,
  "width": 564.2,
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "propagateClick": false,
  "shadow": false,
  "class": "Container",
  "paddingTop": 0,
  "top": 156.05,
  "layout": "absolute",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "data": {
   "name": "--STICKER"
  },
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "scrollBarWidth": 10,
  "borderSize": 0,
  "left": 40
 },
 {
  "contentOpaque": false,
  "children": [
   {
    "contentOpaque": false,
    "children": [
     {
      "children": [
       {
        "paddingTop": 0,
        "paddingLeft": 0,
        "height": "100%",
        "url": "skin/Image_04FF3C2C_1216_7593_41AF_91EA0BBCCE77.jpg",
        "borderRadius": 0,
        "propagateClick": false,
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "scaleMode": "fit_outside",
        "shadow": false,
        "class": "Image",
        "top": "0%",
        "paddingBottom": 0,
        "verticalAlign": "bottom",
        "id": "Image_04FF3C2C_1216_7593_41AF_91EA0BBCCE77",
        "minHeight": 1,
        "width": "100%",
        "data": {
         "name": "Image40635"
        },
        "maxWidth": 2000,
        "minWidth": 1,
        "horizontalAlign": "center",
        "left": "0%",
        "borderSize": 0,
        "maxHeight": 1000
       }
      ],
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "creationPolicy": "delayed",
      "overflow": "scroll",
      "paddingTop": 10,
      "paddingLeft": 10,
      "gap": 10,
      "height": "100%",
      "borderRadius": 0,
      "scrollBarMargin": 2,
      "propagateClick": false,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "paddingRight": 10,
      "shadow": false,
      "class": "Container",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 10,
      "verticalAlign": "middle",
      "id": "Container_04FF2C2C_1216_7593_4195_88C3C7049763",
      "horizontalAlign": "center",
      "minHeight": 1,
      "layout": "absolute",
      "width": "50%",
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "data": {
       "name": "-left"
      },
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "contentOpaque": false
     },
     {
      "children": [
       {
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "creationPolicy": "delayed",
        "overflow": "scroll",
        "paddingTop": 20,
        "paddingLeft": 0,
        "gap": 0,
        "height": 60,
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "paddingRight": 0,
        "shadow": false,
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "id": "Container_04FF1C2C_1216_7593_417B_D7E74ABC91E3",
        "horizontalAlign": "right",
        "minHeight": 0,
        "layout": "horizontal",
        "width": "100%",
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "data": {
         "name": "Container space"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "contentOpaque": false
       },
       {
        "children": [
         {
          "paddingLeft": 0,
          "height": 60,
          "paddingTop": 0,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 0,
          "paddingRight": 0,
          "shadow": false,
          "class": "HTMLText",
          "paddingBottom": 0,
          "id": "HTMLText_04FFCC2C_1216_7593_41A3_D345BDE131A2",
          "minHeight": 1,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.18vh;font-family:'Otama.ep';\">HOUSE</SPAN><SPAN STYLE=\"font-size:6.18vh;font-family:'Otama.ep';\"><B>/</B></SPAN></SPAN></DIV></div>",
          "width": "100%",
          "scrollBarOpacity": 0,
          "minWidth": 1,
          "data": {
           "name": "HTMLText18899"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#99BB1B",
          "scrollBarWidth": 10,
          "borderSize": 0
         },
         {
          "paddingLeft": 0,
          "height": 110,
          "paddingTop": 0,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 0,
          "paddingRight": 0,
          "shadow": false,
          "class": "HTMLText",
          "paddingBottom": 0,
          "id": "HTMLText_05738E73_121E_B275_41AD_219CBBFFB5EC",
          "minHeight": 1,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:11.06vh;font-family:'Otama.ep';\"><B>INFO</B></SPAN></SPAN></DIV></div>",
          "width": "100%",
          "scrollBarOpacity": 0,
          "minWidth": 1,
          "data": {
           "name": "HTMLText11645"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#99BB1B",
          "scrollBarWidth": 10,
          "borderSize": 0
         },
         {
          "backgroundColor": [
           "#000000"
          ],
          "scrollBarColor": "#000000",
          "creationPolicy": "delayed",
          "overflow": "scroll",
          "paddingTop": 0,
          "paddingLeft": 0,
          "gap": 10,
          "height": 7,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 1,
          "backgroundColorRatios": [
           0
          ],
          "paddingRight": 0,
          "shadow": false,
          "class": "Container",
          "backgroundColorDirection": "vertical",
          "paddingBottom": 0,
          "verticalAlign": "top",
          "id": "Container_0BD17D93_1236_F6B5_4193_247950F46092",
          "horizontalAlign": "left",
          "minHeight": 1,
          "layout": "absolute",
          "width": "100%",
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "data": {
           "name": "line"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarWidth": 10,
          "borderSize": 0,
          "contentOpaque": false
         },
         {
          "children": [
           {
            "paddingLeft": 0,
            "height": "100%",
            "paddingTop": 20,
            "borderRadius": 0,
            "scrollBarMargin": 2,
            "propagateClick": false,
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "shadow": false,
            "class": "HTMLText",
            "paddingBottom": 20,
            "id": "HTMLText_0B1CF751_121B_B3B2_41AA_8DF6E24BB6F1",
            "minHeight": 1,
            "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2.73vh;font-family:'Antonio';\"><B>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. MAECENAS CONGHE EROS MAGNA.</B></SPAN><SPAN STYLE=\"font-size:1.72vh;\"> </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\">Proin sit amet pharetra magna. Donec varius eu nisi at facilisis. Vivamus nibh magna, fermentum ac nibh sit amet, euismod efficitur sem. Fusce blandit, purus sed gravida vulputate, justo quam laoreet quam, et dictum mauris arcu vitae justo. Vivamus euismod condimentum ligula quis feugiat. Cras imperdiet tortor mi, a posuere velit tempus et. Maecenas et scelerisque turpis. Quisque in gravida leo, sed dapibus nibh. Ut at consequat turpis. </SPAN></SPAN></DIV></div>",
            "width": "50%",
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "data": {
             "name": "HTMLText12940"
            },
            "scrollBarVisible": "rollOver",
            "scrollBarColor": "#99BB1B",
            "scrollBarWidth": 10,
            "borderSize": 0
           },
           {
            "paddingLeft": 0,
            "height": "100%",
            "paddingTop": 20,
            "borderRadius": 0,
            "scrollBarMargin": 2,
            "propagateClick": false,
            "backgroundOpacity": 0,
            "paddingRight": 0,
            "shadow": false,
            "class": "HTMLText",
            "paddingBottom": 20,
            "id": "HTMLText_04FFBC2C_1216_7593_41A4_E1B06B145F04",
            "minHeight": 1,
            "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\">Mauris aliquet neque quis libero consequat vest</SPAN><SPAN STYLE=\"font-size:1.72vh;font-family:'Open Sans Semibold';\">i</SPAN><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\">bulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\">Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\">Vivamus vitae iaculis turpis. Aliquam imperdiet, elit sed rutrum mollis, neque lacus aliquam lectus.</SPAN></SPAN></DIV></div>",
            "width": "50%",
            "scrollBarOpacity": 0.5,
            "minWidth": 1,
            "data": {
             "name": "HTMLText19460"
            },
            "scrollBarVisible": "rollOver",
            "scrollBarColor": "#99BB1B",
            "scrollBarWidth": 10,
            "borderSize": 0
           }
          ],
          "backgroundColor": [
           "#FFFFFF",
           "#FFFFFF"
          ],
          "scrollBarColor": "#000000",
          "creationPolicy": "delayed",
          "overflow": "scroll",
          "paddingTop": 0,
          "paddingLeft": 0,
          "gap": 22,
          "height": "80%",
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 0.3,
          "backgroundColorRatios": [
           0,
           1
          ],
          "paddingRight": 0,
          "shadow": false,
          "class": "Container",
          "backgroundColorDirection": "vertical",
          "paddingBottom": 0,
          "verticalAlign": "top",
          "id": "Container_04FFDC2C_1216_7593_41A7_64E2588509FB",
          "horizontalAlign": "left",
          "minHeight": 1,
          "layout": "horizontal",
          "width": "100%",
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "data": {
           "name": "- content"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarWidth": 10,
          "borderSize": 0,
          "contentOpaque": false
         }
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#E73B2C",
        "creationPolicy": "delayed",
        "overflow": "scroll",
        "paddingTop": 0,
        "paddingLeft": 0,
        "gap": 0,
        "height": "100%",
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "paddingRight": 0,
        "shadow": false,
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "id": "Container_04FFEC2C_1216_7593_41A4_4CD23AB66B04",
        "horizontalAlign": "left",
        "minHeight": 520,
        "layout": "vertical",
        "width": "100%",
        "scrollBarOpacity": 0.79,
        "minWidth": 100,
        "data": {
         "name": "Container text"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "contentOpaque": false
       },
       {
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "creationPolicy": "delayed",
        "overflow": "scroll",
        "paddingLeft": 0,
        "gap": 10,
        "height": 40,
        "width": 370,
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "paddingRight": 0,
        "shadow": false,
        "class": "Container",
        "paddingTop": 0,
        "backgroundColorDirection": "vertical",
        "layout": "horizontal",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "id": "Container_04FF8C2D_1216_75ED_41A5_B4FCB592F167",
        "horizontalAlign": "left",
        "minHeight": 1,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "data": {
         "name": "Container space"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "contentOpaque": false
       }
      ],
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#0069A3",
      "creationPolicy": "delayed",
      "overflow": "visible",
      "paddingTop": 20,
      "paddingLeft": 60,
      "gap": 0,
      "height": "100%",
      "borderRadius": 0,
      "scrollBarMargin": 2,
      "propagateClick": false,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 60,
      "shadow": false,
      "class": "Container",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 20,
      "verticalAlign": "top",
      "id": "Container_04FF0C2C_1216_7593_419A_8AC354592A51",
      "horizontalAlign": "left",
      "minHeight": 1,
      "layout": "vertical",
      "width": "50%",
      "scrollBarOpacity": 0.51,
      "minWidth": 400,
      "data": {
       "name": "-right"
      },
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "contentOpaque": false
     }
    ],
    "right": "10%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "creationPolicy": "delayed",
    "paddingTop": 0,
    "paddingLeft": 0,
    "overflow": "scroll",
    "shadowVerticalLength": 0,
    "gap": 10,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowBlurRadius": 25,
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 0,
    "shadow": true,
    "shadowOpacity": 0.3,
    "shadowSpread": 1,
    "top": "5%",
    "backgroundColorDirection": "vertical",
    "class": "Container",
    "paddingBottom": 0,
    "shadowHorizontalLength": 0,
    "bottom": "5%",
    "verticalAlign": "top",
    "id": "Container_04FF5C2C_1216_7593_41B2_1B5CFADF351D",
    "minHeight": 1,
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "layout": "horizontal",
    "data": {
     "name": "Global"
    },
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "left",
    "left": "10%",
    "scrollBarWidth": 10,
    "borderSize": 0
   },
   {
    "contentOpaque": false,
    "children": [
     {
      "mode": "push",
      "pressedIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_pressed.jpg",
      "paddingLeft": 0,
      "height": "75%",
      "paddingTop": 0,
      "borderRadius": 0,
      "propagateClick": false,
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "transparencyActive": false,
      "shadow": false,
      "class": "IconButton",
      "cursor": "hand",
      "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "id": "IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A",
      "horizontalAlign": "center",
      "minHeight": 50,
      "width": "25%",
      "data": {
       "name": "X"
      },
      "maxWidth": 60,
      "minWidth": 50,
      "rollOverIconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A_rollover.jpg",
      "iconURL": "skin/IconButton_04FE6C2D_1216_75ED_41A3_C531DD2D317A.jpg",
      "borderSize": 0,
      "maxHeight": 60
     }
    ],
    "right": "10%",
    "creationPolicy": "delayed",
    "overflow": "visible",
    "paddingLeft": 0,
    "gap": 10,
    "paddingTop": 20,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "backgroundOpacity": 0,
    "paddingRight": 20,
    "shadow": false,
    "class": "Container",
    "top": "5%",
    "layout": "vertical",
    "bottom": "80%",
    "paddingBottom": 0,
    "verticalAlign": "top",
    "id": "Container_04FF9C2D_1216_75ED_41A8_E3495D8F554E",
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "data": {
     "name": "Container X global"
    },
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "right",
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "left": "10%"
   }
  ],
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#04A3E1",
  "creationPolicy": "delayed",
  "overflow": "scroll",
  "paddingTop": 0,
  "paddingLeft": 0,
  "gap": 10,
  "propagateClick": false,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "backgroundOpacity": 0.6,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "shadow": false,
  "class": "Container",
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "bottom": "0%",
  "click": "this.setComponentVisibility(this.Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95, false, 0, null, null, false)",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "id": "Container_04FE7C2D_1216_75ED_4197_E539B3CD3A95",
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "data": {
   "name": "--INFO"
  },
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "visible": false,
  "left": "0%",
  "scrollBarWidth": 10,
  "borderSize": 0
 },
 {
  "contentOpaque": false,
  "children": [
   {
    "contentOpaque": false,
    "children": [
     {
      "children": [
       {
        "paddingLeft": 80,
        "height": "100%",
        "paddingTop": 36,
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "shadow": false,
        "class": "HTMLText",
        "top": "0%",
        "paddingBottom": 0,
        "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
        "minHeight": 100,
        "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.59vh;font-family:'Otama.ep';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
        "width": "77.115%",
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "data": {
         "name": "HTMLText54192"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "left": "0%"
       },
       {
        "right": 20,
        "mode": "push",
        "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
        "paddingTop": 0,
        "paddingLeft": 0,
        "height": "75%",
        "propagateClick": false,
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "transparencyActive": false,
        "shadow": false,
        "class": "IconButton",
        "top": 20,
        "cursor": "hand",
        "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
        "minHeight": 50,
        "width": "25%",
        "data": {
         "name": "X"
        },
        "maxWidth": 60,
        "minWidth": 50,
        "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
        "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
        "horizontalAlign": "right",
        "borderSize": 0,
        "maxHeight": 60
       }
      ],
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "creationPolicy": "delayed",
      "overflow": "visible",
      "paddingTop": 0,
      "paddingLeft": 0,
      "gap": 10,
      "height": 90,
      "borderRadius": 0,
      "scrollBarMargin": 2,
      "propagateClick": false,
      "backgroundOpacity": 0.3,
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "shadow": false,
      "class": "Container",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "verticalAlign": "top",
      "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
      "horizontalAlign": "left",
      "minHeight": 1,
      "layout": "absolute",
      "width": "100%",
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "data": {
       "name": "header"
      },
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "contentOpaque": false
     },
     {
      "scrollBarColor": "#BBD149",
      "itemPaddingBottom": 3,
      "itemLabelFontColor": "#666666",
      "borderSize": 0,
      "itemMaxWidth": 1000,
      "itemMinWidth": 50,
      "itemBackgroundOpacity": 0,
      "paddingLeft": 70,
      "itemMaxHeight": 1000,
      "itemPaddingLeft": 3,
      "backgroundOpacity": 0,
      "rollOverItemThumbnailShadowBlurRadius": 0,
      "paddingRight": 70,
      "itemWidth": 220,
      "shadow": false,
      "class": "ThumbnailGrid",
      "itemLabelTextDecoration": "none",
      "itemThumbnailShadow": false,
      "itemLabelFontWeight": "bold",
      "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
      "itemPaddingTop": 3,
      "itemVerticalAlign": "top",
      "itemLabelPosition": "bottom",
      "itemMode": "normal",
      "minWidth": 1,
      "itemThumbnailOpacity": 1,
      "itemThumbnailBorderRadius": 0,
      "itemThumbnailScaleMode": "fit_outside",
      "itemLabelFontSize": 14,
      "rollOverItemThumbnailShadowColor": "#A2B935",
      "rollOverItemThumbnailShadowVerticalLength": 0,
      "selectedItemThumbnailShadowBlurRadius": 16,
      "selectedItemLabelFontColor": "#A2B935",
      "itemBackgroundColorDirection": "vertical",
      "gap": 26,
      "height": "100%",
      "rollOverItemThumbnailShadowHorizontalLength": 8,
      "paddingTop": 10,
      "selectedItemThumbnailShadowHorizontalLength": 0,
      "borderRadius": 5,
      "scrollBarMargin": 2,
      "itemThumbnailHeight": 125,
      "itemLabelHorizontalAlign": "center",
      "propagateClick": false,
      "itemHorizontalAlign": "center",
      "itemLabelGap": 7,
      "itemOpacity": 1,
      "itemPaddingRight": 3,
      "itemLabelFontFamily": "Times New Roman",
      "paddingBottom": 70,
      "verticalAlign": "middle",
      "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
      "rollOverItemThumbnailShadow": true,
      "horizontalAlign": "center",
      "minHeight": 1,
      "itemBackgroundColor": [],
      "itemBackgroundColorRatios": [],
      "scrollBarOpacity": 0.5,
      "itemMinHeight": 50,
      "itemLabelFontStyle": "normal",
      "itemHeight": 156,
      "selectedItemThumbnailShadowVerticalLength": 0,
      "data": {
       "name": "ThumbnailList5161"
      },
      "scrollBarVisible": "rollOver",
      "rollOverItemLabelFontColor": "#A2B935",
      "width": "100%",
      "selectedItemLabelFontWeight": "bold",
      "selectedItemThumbnailShadow": true,
      "scrollBarWidth": 10,
      "itemBorderRadius": 0,
      "itemThumbnailWidth": 220
     }
    ],
    "right": "15%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "creationPolicy": "delayed",
    "paddingTop": 0,
    "paddingLeft": 0,
    "overflow": "visible",
    "shadowVerticalLength": 0,
    "gap": 10,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowBlurRadius": 25,
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 0,
    "shadow": true,
    "shadowOpacity": 0.3,
    "shadowSpread": 1,
    "top": "7%",
    "backgroundColorDirection": "vertical",
    "class": "Container",
    "paddingBottom": 0,
    "shadowHorizontalLength": 0,
    "bottom": "7%",
    "verticalAlign": "top",
    "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
    "minHeight": 1,
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "layout": "vertical",
    "data": {
     "name": "Global"
    },
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "center",
    "left": "15%",
    "scrollBarWidth": 10,
    "borderSize": 0
   }
  ],
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "overflow": "scroll",
  "paddingTop": 0,
  "paddingLeft": 0,
  "gap": 10,
  "propagateClick": false,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "backgroundOpacity": 0.6,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "shadow": false,
  "class": "Container",
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "bottom": "0%",
  "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "data": {
   "name": "--PANORAMA LIST"
  },
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "visible": false,
  "left": "0%",
  "scrollBarWidth": 10,
  "borderSize": 0
 },
 {
  "contentOpaque": false,
  "children": [
   {
    "contentOpaque": false,
    "children": [
     {
      "children": [
       {
        "right": "0%",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "insetBorder": false,
        "paddingTop": 0,
        "paddingLeft": 0,
        "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426958.695011444!2d39.26460682562743!3d-6.1659828881606344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185d29602a2909e5%3A0xa035af4aad9b7d5f!2zWmFuesOtYmFy!5e0!3m2!1ses!2ses!4v1542269644530\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
        "propagateClick": false,
        "borderRadius": 0,
        "backgroundOpacity": 1,
        "backgroundColorRatios": [
         0
        ],
        "paddingRight": 0,
        "shadow": false,
        "class": "WebFrame",
        "top": "0%",
        "backgroundColorDirection": "vertical",
        "bottom": "0%",
        "paddingBottom": 0,
        "id": "WebFrame_198A3B12_1666_89B6_41B5_4C2585EFD00E",
        "minHeight": 1,
        "data": {
         "name": "WebFrame5113"
        },
        "minWidth": 1,
        "scrollEnabled": true,
        "left": "0%",
        "borderSize": 0
       }
      ],
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "creationPolicy": "delayed",
      "overflow": "scroll",
      "paddingTop": 10,
      "paddingLeft": 10,
      "gap": 10,
      "height": "100%",
      "borderRadius": 0,
      "scrollBarMargin": 2,
      "propagateClick": false,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "paddingRight": 10,
      "shadow": false,
      "class": "Container",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 10,
      "verticalAlign": "middle",
      "id": "Container_1813DA3E_1663_8BF1_4193_F28A53801FBC",
      "horizontalAlign": "center",
      "minHeight": 1,
      "layout": "absolute",
      "width": "70%",
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "data": {
       "name": "-left"
      },
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "contentOpaque": false
     },
     {
      "children": [
       {
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "creationPolicy": "delayed",
        "overflow": "scroll",
        "paddingTop": 20,
        "paddingLeft": 0,
        "gap": 0,
        "height": 60,
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "paddingRight": 0,
        "shadow": false,
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "id": "Container_18121A3E_1663_8BF1_41B4_AB4C2B45EFFF",
        "horizontalAlign": "right",
        "minHeight": 0,
        "layout": "horizontal",
        "width": "100%",
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "data": {
         "name": "Container space"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "contentOpaque": false
       },
       {
        "children": [
         {
          "paddingLeft": 0,
          "height": "13%",
          "paddingTop": 0,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 0,
          "paddingRight": 0,
          "shadow": false,
          "class": "HTMLText",
          "paddingBottom": 0,
          "id": "HTMLText_18123A3E_1663_8BF1_419F_B7BD72D2053B",
          "minHeight": 1,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.18vh;font-family:'Otama.ep';\">HOUSE</SPAN></SPAN></DIV></div>",
          "width": "100%",
          "scrollBarOpacity": 0,
          "minWidth": 1,
          "data": {
           "name": "HTMLText23803"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#BBD149",
          "scrollBarWidth": 10,
          "borderSize": 0
         },
         {
          "paddingLeft": 0,
          "height": "15%",
          "paddingTop": 0,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 0,
          "paddingRight": 0,
          "shadow": false,
          "class": "HTMLText",
          "paddingBottom": 0,
          "id": "HTMLText_18125A3F_1663_8BEF_4196_AE566E10BAFC",
          "minHeight": 1,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:7.04vh;font-family:'Otama.ep';\"><B>LOCATION</B></SPAN></SPAN></DIV></div>",
          "width": "100%",
          "scrollBarOpacity": 0,
          "minWidth": 1,
          "data": {
           "name": "HTMLText24905"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#BBD149",
          "scrollBarWidth": 10,
          "borderSize": 0
         },
         {
          "backgroundColor": [
           "#000000"
          ],
          "scrollBarColor": "#000000",
          "creationPolicy": "delayed",
          "overflow": "scroll",
          "paddingTop": 0,
          "paddingLeft": 0,
          "gap": 10,
          "height": 7,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 1,
          "backgroundColorRatios": [
           0
          ],
          "paddingRight": 0,
          "shadow": false,
          "class": "Container",
          "backgroundColorDirection": "vertical",
          "paddingBottom": 0,
          "verticalAlign": "top",
          "id": "Container_18124A3F_1663_8BEF_4167_4F797ED9B565",
          "horizontalAlign": "left",
          "minHeight": 1,
          "layout": "absolute",
          "width": "100%",
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "data": {
           "name": "line"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarWidth": 10,
          "borderSize": 0,
          "contentOpaque": false
         },
         {
          "paddingLeft": 0,
          "height": "100%",
          "paddingTop": 0,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 0,
          "paddingRight": 0,
          "shadow": false,
          "class": "HTMLText",
          "paddingBottom": 20,
          "id": "HTMLText_18127A3F_1663_8BEF_4175_B0DF8CE38BFE",
          "minHeight": 1,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:2.59vh;font-family:'Antonio';\"><B>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. MAECENAS CONGUE EROS MAGNA, ID BIBENDUM EROS MALESUADA VITAE.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Open Sans Semibold';\">Address:</SPAN><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\"> line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Open Sans Semibold';\">Address:</SPAN><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\"> line 2</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Open Sans Semibold';\">Address:</SPAN><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\"> line 3</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Open Sans Semibold';\">GPS:</SPAN><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\"> xxxxxxxxxx</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
          "width": "100%",
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "data": {
           "name": "HTMLText"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#B3D237",
          "scrollBarWidth": 10,
          "borderSize": 0
         },
         {
          "iconBeforeLabel": true,
          "textDecoration": "none",
          "backgroundColor": [
           "#99BB1B"
          ],
          "fontColor": "#FFFFFF",
          "mode": "push",
          "rollOverBackgroundOpacity": 1,
          "paddingLeft": 0,
          "pressedBackgroundColor": [
           "#000000"
          ],
          "height": 59,
          "fontFamily": "Antonio",
          "width": 207,
          "gap": 5,
          "propagateClick": false,
          "fontStyle": "normal",
          "shadowBlurRadius": 6,
          "borderRadius": 0,
          "backgroundOpacity": 0.7,
          "backgroundColorRatios": [
           0
          ],
          "paddingRight": 0,
          "shadow": false,
          "iconWidth": 32,
          "class": "Button",
          "paddingTop": 0,
          "fontWeight": "bold",
          "backgroundColorDirection": "vertical",
          "click": "this.openLink('http://www.loremipsum.com', '_blank')",
          "paddingBottom": 0,
          "cursor": "hand",
          "verticalAlign": "middle",
          "id": "Button_18126A3F_1663_8BEF_41A4_B0EDA1A5F4E3",
          "horizontalAlign": "center",
          "minHeight": 1,
          "layout": "horizontal",
          "pressedBackgroundColorRatios": [
           0
          ],
          "shadowSpread": 1,
          "minWidth": 1,
          "shadowColor": "#000000",
          "iconHeight": 32,
          "label": "BOOK NOW",
          "borderColor": "#000000",
          "fontSize": 30,
          "data": {
           "name": "Button31015"
          },
          "visible": false,
          "pressedBackgroundOpacity": 1,
          "borderSize": 0
         }
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#E73B2C",
        "creationPolicy": "delayed",
        "overflow": "scroll",
        "paddingTop": 0,
        "paddingLeft": 0,
        "gap": 10,
        "height": "100%",
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "paddingRight": 0,
        "shadow": false,
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingBottom": 30,
        "verticalAlign": "top",
        "id": "Container_18120A3E_1663_8BF1_419D_69232EA5FB3D",
        "horizontalAlign": "left",
        "minHeight": 520,
        "layout": "vertical",
        "width": "100%",
        "scrollBarOpacity": 0.79,
        "minWidth": 100,
        "data": {
         "name": "Container text"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "contentOpaque": false
       },
       {
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "creationPolicy": "delayed",
        "overflow": "scroll",
        "paddingLeft": 0,
        "gap": 10,
        "height": 40,
        "width": 370,
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "paddingRight": 0,
        "shadow": false,
        "class": "Container",
        "paddingTop": 0,
        "backgroundColorDirection": "vertical",
        "layout": "horizontal",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "id": "Container_18128A3F_1663_8BEF_41B6_51D1938FA48A",
        "horizontalAlign": "left",
        "minHeight": 1,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "data": {
         "name": "Container space"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "contentOpaque": false
       }
      ],
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#0069A3",
      "creationPolicy": "delayed",
      "overflow": "visible",
      "paddingTop": 20,
      "paddingLeft": 40,
      "gap": 0,
      "height": "100%",
      "borderRadius": 0,
      "scrollBarMargin": 2,
      "propagateClick": false,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 50,
      "shadow": false,
      "class": "Container",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 20,
      "verticalAlign": "top",
      "id": "Container_1813FA3E_1663_8BF1_4180_5027A2A87866",
      "horizontalAlign": "left",
      "minHeight": 1,
      "layout": "vertical",
      "width": "30%",
      "scrollBarOpacity": 0.51,
      "minWidth": 350,
      "data": {
       "name": "-right"
      },
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "contentOpaque": false
     }
    ],
    "right": "10%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "creationPolicy": "delayed",
    "paddingTop": 0,
    "paddingLeft": 0,
    "overflow": "scroll",
    "shadowVerticalLength": 0,
    "gap": 10,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowBlurRadius": 25,
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 0,
    "shadow": true,
    "shadowOpacity": 0.3,
    "shadowSpread": 1,
    "top": "5%",
    "backgroundColorDirection": "vertical",
    "class": "Container",
    "paddingBottom": 0,
    "shadowHorizontalLength": 0,
    "bottom": "5%",
    "verticalAlign": "top",
    "id": "Container_1813AA3E_1663_8BF1_41A2_CA5EE3718362",
    "minHeight": 1,
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "layout": "horizontal",
    "data": {
     "name": "Global"
    },
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "left",
    "left": "10%",
    "scrollBarWidth": 10,
    "borderSize": 0
   },
   {
    "contentOpaque": false,
    "children": [
     {
      "mode": "push",
      "pressedIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_pressed.jpg",
      "paddingLeft": 0,
      "height": "75%",
      "paddingTop": 0,
      "borderRadius": 0,
      "propagateClick": false,
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "transparencyActive": false,
      "shadow": false,
      "class": "IconButton",
      "cursor": "hand",
      "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "id": "IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1",
      "horizontalAlign": "center",
      "minHeight": 50,
      "width": "25%",
      "data": {
       "name": "X"
      },
      "maxWidth": 60,
      "minWidth": 50,
      "rollOverIconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1_rollover.jpg",
      "iconURL": "skin/IconButton_1812DA3F_1663_8BEF_41A5_6E0723037CA1.jpg",
      "borderSize": 0,
      "maxHeight": 60
     }
    ],
    "right": "10%",
    "creationPolicy": "delayed",
    "overflow": "visible",
    "paddingLeft": 0,
    "gap": 10,
    "paddingTop": 20,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "backgroundOpacity": 0,
    "paddingRight": 20,
    "shadow": false,
    "class": "Container",
    "top": "5%",
    "layout": "vertical",
    "bottom": "80%",
    "paddingBottom": 0,
    "verticalAlign": "top",
    "id": "Container_1812AA3F_1663_8BEF_41A4_02F566B1BC6D",
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "data": {
     "name": "Container X global"
    },
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "right",
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "left": "10%"
   }
  ],
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "overflow": "scroll",
  "paddingTop": 0,
  "paddingLeft": 0,
  "gap": 10,
  "propagateClick": false,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "backgroundOpacity": 0.6,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "shadow": false,
  "class": "Container",
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "bottom": "0%",
  "click": "this.setComponentVisibility(this.Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F, false, 0, null, null, false)",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "id": "Container_1812EA3F_1663_8BEF_41AF_0A4CCC089B5F",
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "data": {
   "name": "--LOCATION"
  },
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "visible": false,
  "left": "0%",
  "scrollBarWidth": 10,
  "borderSize": 0
 },
 {
  "contentOpaque": false,
  "children": [
   {
    "contentOpaque": false,
    "children": [
     {
      "children": [
       {
        "paddingLeft": 80,
        "height": "100%",
        "paddingTop": 36,
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "shadow": false,
        "class": "HTMLText",
        "top": "0%",
        "paddingBottom": 0,
        "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
        "minHeight": 100,
        "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.59vh;font-family:'Otama.ep';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
        "width": "77.115%",
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "data": {
         "name": "HTMLText54192"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarColor": "#000000",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "left": "0%"
       },
       {
        "right": 20,
        "mode": "push",
        "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
        "paddingTop": 0,
        "paddingLeft": 0,
        "height": "75%",
        "propagateClick": false,
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "transparencyActive": false,
        "shadow": false,
        "class": "IconButton",
        "top": 20,
        "cursor": "hand",
        "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
        "minHeight": 50,
        "width": "25%",
        "data": {
         "name": "IconButton54739"
        },
        "maxWidth": 60,
        "minWidth": 50,
        "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
        "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
        "horizontalAlign": "right",
        "borderSize": 0,
        "maxHeight": 60
       }
      ],
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "creationPolicy": "delayed",
      "overflow": "visible",
      "paddingTop": 0,
      "paddingLeft": 0,
      "gap": 10,
      "height": 90,
      "borderRadius": 0,
      "scrollBarMargin": 2,
      "propagateClick": false,
      "backgroundOpacity": 0.3,
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "shadow": false,
      "class": "Container",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "verticalAlign": "top",
      "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
      "horizontalAlign": "left",
      "minHeight": 1,
      "layout": "absolute",
      "width": "100%",
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "data": {
       "name": "header"
      },
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "contentOpaque": false
     },
     {
      "toolTipOpacity": 1,
      "progressBarOpacity": 1,
      "toolTipPaddingBottom": 4,
      "playbackBarHeadShadowOpacity": 0.7,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "progressRight": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipBorderColor": "#767676",
      "borderSize": 0,
      "playbackBarRight": 0,
      "paddingLeft": 0,
      "progressBottom": 2,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "progressBorderColor": "#000000",
      "progressHeight": 10,
      "playbackBarBottom": 0,
      "progressBorderSize": 0,
      "playbackBarLeft": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressLeft": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarBorderSize": 0,
      "shadow": false,
      "progressOpacity": 1,
      "class": "ViewerArea",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarBackgroundOpacity": 1,
      "toolTipPaddingRight": 6,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "minWidth": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarHeadHeight": 15,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadowColor": "#000000",
      "transitionDuration": 500,
      "progressBarBorderRadius": 0,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadShadow": true,
      "toolTipBorderSize": 1,
      "toolTipPaddingTop": 4,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontStyle": "normal",
      "playbackBarBorderColor": "#FFFFFF",
      "paddingTop": 0,
      "height": "100%",
      "toolTipBorderRadius": 3,
      "toolTipFontFamily": "Arial",
      "borderRadius": 0,
      "toolTipFontColor": "#606060",
      "playbackBarHeadBorderSize": 0,
      "propagateClick": false,
      "toolTipTextShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "toolTipShadowColor": "#333333",
      "toolTipFontWeight": "normal",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBorderSize": 0,
      "progressBarBorderColor": "#000000",
      "width": "100%",
      "toolTipPaddingLeft": 6,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipDisplayTime": 600,
      "toolTipShadowBlurRadius": 3,
      "paddingBottom": 0,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColorRatios": [
       0
      ],
      "id": "MapViewer",
      "progressBorderRadius": 0,
      "playbackBarHeight": 10,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadWidth": 6,
      "progressBackgroundOpacity": 1,
      "playbackBarOpacity": 1,
      "minHeight": 1,
      "transitionMode": "blending",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipFontSize": 12,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarProgressBorderRadius": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarProgressBorderColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowOpacity": 1,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadOpacity": 1
     },
     {
      "itemPaddingBottom": 3,
      "backgroundColor": [
       "#000000"
      ],
      "itemLabelFontColor": "#666666",
      "borderSize": 0,
      "itemMaxWidth": 1000,
      "itemMinWidth": 50,
      "itemBackgroundOpacity": 0,
      "paddingLeft": 70,
      "itemMaxHeight": 1000,
      "itemPaddingLeft": 3,
      "backgroundOpacity": 0.05,
      "rollOverItemThumbnailShadowBlurRadius": 0,
      "paddingRight": 70,
      "itemWidth": 220,
      "shadow": false,
      "class": "ThumbnailGrid",
      "itemLabelTextDecoration": "none",
      "itemThumbnailShadow": false,
      "backgroundColorDirection": "vertical",
      "itemLabelFontWeight": "normal",
      "playList": "this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist",
      "itemPaddingTop": 3,
      "itemVerticalAlign": "top",
      "itemLabelPosition": "bottom",
      "itemMode": "normal",
      "minWidth": 1,
      "itemThumbnailOpacity": 1,
      "itemThumbnailBorderRadius": 0,
      "itemThumbnailScaleMode": "fit_outside",
      "visible": false,
      "itemLabelFontSize": 14,
      "rollOverItemThumbnailShadowColor": "#04A3E1",
      "rollOverItemThumbnailShadowVerticalLength": 0,
      "selectedItemThumbnailShadowBlurRadius": 16,
      "selectedItemLabelFontColor": "#04A3E1",
      "paddingTop": 10,
      "itemBackgroundColorDirection": "vertical",
      "gap": 26,
      "height": "100%",
      "rollOverItemThumbnailShadowHorizontalLength": 8,
      "selectedItemThumbnailShadowHorizontalLength": 0,
      "borderRadius": 5,
      "scrollBarMargin": 2,
      "itemThumbnailHeight": 125,
      "itemLabelHorizontalAlign": "center",
      "propagateClick": false,
      "itemHorizontalAlign": "center",
      "backgroundColorRatios": [
       0
      ],
      "itemOpacity": 1,
      "itemPaddingRight": 3,
      "itemLabelGap": 7,
      "itemLabelFontFamily": "Montserrat",
      "paddingBottom": 70,
      "verticalAlign": "middle",
      "id": "ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB",
      "rollOverItemThumbnailShadow": true,
      "horizontalAlign": "center",
      "minHeight": 1,
      "itemBackgroundColor": [],
      "itemBackgroundColorRatios": [],
      "scrollBarOpacity": 0.5,
      "itemMinHeight": 50,
      "itemLabelFontStyle": "normal",
      "itemHeight": 156,
      "selectedItemThumbnailShadowVerticalLength": 0,
      "data": {
       "name": "ThumbnailList5161"
      },
      "scrollBarVisible": "rollOver",
      "rollOverItemLabelFontColor": "#04A3E1",
      "width": "100%",
      "selectedItemLabelFontWeight": "bold",
      "scrollBarColor": "#04A3E1",
      "selectedItemThumbnailShadow": true,
      "scrollBarWidth": 10,
      "itemBorderRadius": 0,
      "itemThumbnailWidth": 220
     }
    ],
    "right": "15%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "creationPolicy": "delayed",
    "paddingTop": 0,
    "paddingLeft": 0,
    "overflow": "visible",
    "shadowVerticalLength": 0,
    "gap": 10,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowBlurRadius": 25,
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 0,
    "shadow": true,
    "shadowOpacity": 0.3,
    "shadowSpread": 1,
    "top": "7%",
    "backgroundColorDirection": "vertical",
    "class": "Container",
    "paddingBottom": 0,
    "shadowHorizontalLength": 0,
    "bottom": "7%",
    "verticalAlign": "top",
    "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
    "minHeight": 1,
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "layout": "vertical",
    "data": {
     "name": "Global"
    },
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "center",
    "left": "15%",
    "scrollBarWidth": 10,
    "borderSize": 0
   }
  ],
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "overflow": "scroll",
  "paddingTop": 0,
  "paddingLeft": 0,
  "gap": 10,
  "propagateClick": false,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "backgroundOpacity": 0.6,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "shadow": false,
  "class": "Container",
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "bottom": "0%",
  "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "data": {
   "name": "--FLOORPLAN"
  },
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "visible": false,
  "left": "0%",
  "scrollBarWidth": 10,
  "borderSize": 0
 },
 {
  "contentOpaque": false,
  "children": [
   {
    "contentOpaque": false,
    "children": [
     {
      "children": [
       {
        "toolTipOpacity": 1,
        "progressBarOpacity": 1,
        "toolTipPaddingBottom": 4,
        "playbackBarHeadShadowOpacity": 0.7,
        "playbackBarProgressOpacity": 1,
        "progressBackgroundColorDirection": "vertical",
        "toolTipShadowSpread": 0,
        "progressRight": 0,
        "playbackBarHeadBorderRadius": 0,
        "toolTipBorderColor": "#767676",
        "borderSize": 0,
        "playbackBarRight": 0,
        "paddingLeft": 0,
        "progressBottom": 2,
        "progressBarBackgroundColor": [
         "#3399FF"
        ],
        "progressBorderColor": "#000000",
        "progressHeight": 10,
        "playbackBarBottom": 0,
        "progressBorderSize": 0,
        "playbackBarLeft": 0,
        "toolTipTextShadowBlurRadius": 3,
        "playbackBarHeadShadowVerticalLength": 0,
        "progressLeft": 0,
        "progressBackgroundColor": [
         "#FFFFFF"
        ],
        "paddingRight": 0,
        "toolTipShadowVerticalLength": 0,
        "playbackBarBorderSize": 0,
        "shadow": false,
        "progressOpacity": 1,
        "class": "ViewerArea",
        "playbackBarHeadBorderColor": "#000000",
        "playbackBarBackgroundOpacity": 1,
        "toolTipPaddingRight": 6,
        "playbackBarHeadBackgroundColorDirection": "vertical",
        "minWidth": 1,
        "playbackBarProgressBackgroundColorDirection": "vertical",
        "playbackBarHeadHeight": 15,
        "playbackBarBorderRadius": 0,
        "playbackBarHeadShadowColor": "#000000",
        "transitionDuration": 500,
        "progressBarBorderRadius": 0,
        "playbackBarHeadBackgroundColor": [
         "#111111",
         "#666666"
        ],
        "progressBarBackgroundColorDirection": "vertical",
        "toolTipTextShadowOpacity": 0,
        "playbackBarHeadShadow": true,
        "toolTipBorderSize": 1,
        "toolTipPaddingTop": 4,
        "toolTipBackgroundColor": "#F6F6F6",
        "toolTipFontStyle": "normal",
        "playbackBarBorderColor": "#FFFFFF",
        "paddingTop": 0,
        "height": "100%",
        "toolTipBorderRadius": 3,
        "toolTipFontFamily": "Arial",
        "propagateClick": false,
        "toolTipFontColor": "#606060",
        "playbackBarHeadBorderSize": 0,
        "borderRadius": 0,
        "toolTipTextShadowColor": "#000000",
        "playbackBarProgressBackgroundColor": [
         "#3399FF"
        ],
        "toolTipShadowColor": "#333333",
        "toolTipFontWeight": "normal",
        "playbackBarProgressBackgroundColorRatios": [
         0
        ],
        "progressBarBorderSize": 0,
        "progressBarBorderColor": "#000000",
        "width": "100%",
        "top": "0%",
        "playbackBarHeadShadowHorizontalLength": 0,
        "toolTipDisplayTime": 600,
        "toolTipPaddingLeft": 6,
        "paddingBottom": 0,
        "playbackBarBackgroundColor": [
         "#FFFFFF"
        ],
        "progressBarBackgroundColorRatios": [
         0
        ],
        "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
        "progressBorderRadius": 0,
        "toolTipShadowBlurRadius": 3,
        "progressBackgroundColorRatios": [
         0
        ],
        "playbackBarHeadWidth": 6,
        "progressBackgroundOpacity": 1,
        "playbackBarOpacity": 1,
        "playbackBarHeight": 10,
        "minHeight": 1,
        "transitionMode": "blending",
        "playbackBarHeadBackgroundColorRatios": [
         0,
         1
        ],
        "toolTipFontSize": 12,
        "playbackBarHeadShadowBlurRadius": 3,
        "playbackBarProgressBorderRadius": 0,
        "playbackBarProgressBorderSize": 0,
        "playbackBarProgressBorderColor": "#000000",
        "left": "0%",
        "toolTipShadowHorizontalLength": 0,
        "toolTipShadowOpacity": 1,
        "playbackBarBackgroundColorDirection": "vertical",
        "playbackBarHeadOpacity": 1
       },
       {
        "mode": "push",
        "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
        "paddingLeft": 0,
        "width": 165,
        "propagateClick": false,
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "transparencyActive": false,
        "shadow": false,
        "class": "IconButton",
        "paddingTop": 0,
        "top": "20%",
        "cursor": "hand",
        "bottom": "20%",
        "paddingBottom": 0,
        "verticalAlign": "middle",
        "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
        "minHeight": 50,
        "data": {
         "name": "IconButton27247"
        },
        "maxWidth": 60,
        "minWidth": 50,
        "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
        "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
        "horizontalAlign": "center",
        "left": 10,
        "borderSize": 0,
        "maxHeight": 60
       },
       {
        "right": 10,
        "mode": "push",
        "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
        "paddingTop": 0,
        "paddingLeft": 0,
        "propagateClick": false,
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "transparencyActive": false,
        "shadow": false,
        "class": "IconButton",
        "top": "20%",
        "cursor": "hand",
        "bottom": "20%",
        "paddingBottom": 0,
        "verticalAlign": "middle",
        "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
        "minHeight": 50,
        "width": "14%",
        "data": {
         "name": "IconButton29918"
        },
        "maxWidth": 60,
        "minWidth": 50,
        "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
        "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
        "horizontalAlign": "center",
        "borderSize": 0,
        "maxHeight": 60
       },
       {
        "right": 20,
        "mode": "push",
        "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
        "paddingTop": 0,
        "paddingLeft": 0,
        "height": "10%",
        "propagateClick": false,
        "borderRadius": 0,
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "transparencyActive": false,
        "shadow": false,
        "class": "IconButton",
        "top": 20,
        "cursor": "hand",
        "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
        "minHeight": 50,
        "width": "10%",
        "data": {
         "name": "IconButton54739"
        },
        "maxWidth": 60,
        "minWidth": 50,
        "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
        "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
        "horizontalAlign": "right",
        "borderSize": 0,
        "maxHeight": 60
       }
      ],
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "creationPolicy": "delayed",
      "overflow": "visible",
      "paddingTop": 0,
      "paddingLeft": 0,
      "gap": 10,
      "height": "100%",
      "borderRadius": 0,
      "scrollBarMargin": 2,
      "propagateClick": false,
      "backgroundOpacity": 0.3,
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "shadow": false,
      "class": "Container",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 0,
      "verticalAlign": "top",
      "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
      "horizontalAlign": "left",
      "minHeight": 1,
      "layout": "absolute",
      "width": "100%",
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "data": {
       "name": "Container photo"
      },
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "contentOpaque": false
     }
    ],
    "right": "15%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "creationPolicy": "delayed",
    "paddingTop": 10,
    "paddingLeft": 10,
    "overflow": "visible",
    "shadowVerticalLength": 0,
    "gap": 10,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowBlurRadius": 25,
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 10,
    "shadow": true,
    "shadowOpacity": 0.3,
    "shadowSpread": 1,
    "top": "7%",
    "backgroundColorDirection": "vertical",
    "class": "Container",
    "paddingBottom": 10,
    "shadowHorizontalLength": 0,
    "bottom": "7%",
    "verticalAlign": "top",
    "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
    "minHeight": 1,
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "layout": "vertical",
    "data": {
     "name": "Global"
    },
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "center",
    "left": "15%",
    "scrollBarWidth": 10,
    "borderSize": 0
   }
  ],
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "overflow": "scroll",
  "paddingTop": 0,
  "paddingLeft": 0,
  "gap": 10,
  "propagateClick": false,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "backgroundOpacity": 0.6,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "shadow": false,
  "class": "Container",
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "bottom": "0%",
  "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "data": {
   "name": "--PHOTOALBUM"
  },
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "visible": false,
  "left": "0%",
  "scrollBarWidth": 10,
  "borderSize": 0
 },
 {
  "contentOpaque": false,
  "children": [
   {
    "contentOpaque": false,
    "children": [
     {
      "children": [
       {
        "paddingTop": 0,
        "paddingLeft": 0,
        "height": "100%",
        "url": "skin/Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270.jpg",
        "borderRadius": 0,
        "propagateClick": false,
        "backgroundOpacity": 0,
        "paddingRight": 0,
        "scaleMode": "fit_outside",
        "shadow": false,
        "class": "Image",
        "top": "0%",
        "paddingBottom": 0,
        "verticalAlign": "middle",
        "id": "Image_0DEC8FEC_12FA_D26C_4162_7A2BAB1DA270",
        "minHeight": 1,
        "width": "100%",
        "data": {
         "name": "Image"
        },
        "maxWidth": 2000,
        "minWidth": 1,
        "horizontalAlign": "center",
        "left": "0%",
        "borderSize": 0,
        "maxHeight": 1000
       }
      ],
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarColor": "#000000",
      "creationPolicy": "delayed",
      "overflow": "scroll",
      "paddingTop": 10,
      "paddingLeft": 10,
      "gap": 10,
      "height": "100%",
      "borderRadius": 0,
      "scrollBarMargin": 2,
      "propagateClick": false,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "paddingRight": 10,
      "shadow": false,
      "class": "Container",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 10,
      "verticalAlign": "middle",
      "id": "Container_0DEC9FEC_12FA_D293_41A0_DAD5B350B643",
      "horizontalAlign": "center",
      "minHeight": 1,
      "layout": "absolute",
      "width": "85%",
      "scrollBarOpacity": 0.5,
      "minWidth": 1,
      "data": {
       "name": "-left"
      },
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "contentOpaque": false
     },
     {
      "children": [
       {
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "creationPolicy": "delayed",
        "overflow": "scroll",
        "paddingTop": 20,
        "paddingLeft": 0,
        "gap": 0,
        "height": 60,
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "paddingRight": 0,
        "shadow": false,
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "id": "Container_0DECAFED_12FA_D26D_4191_988031ED4C85",
        "horizontalAlign": "right",
        "minHeight": 0,
        "layout": "horizontal",
        "width": "100%",
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "data": {
         "name": "Container space"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "contentOpaque": false
       },
       {
        "children": [
         {
          "paddingLeft": 0,
          "height": 57,
          "paddingTop": 0,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 0,
          "paddingRight": 0,
          "shadow": false,
          "class": "HTMLText",
          "paddingBottom": 0,
          "id": "HTMLText_335E39B6_12FA_FEFE_41AA_91C449696299",
          "minHeight": 1,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.18vh;font-family:'Otama.ep';\">CONTACT</SPAN></SPAN></DIV></div>",
          "width": "100%",
          "scrollBarOpacity": 0,
          "minWidth": 1,
          "data": {
           "name": "HTMLText23803"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#BBD149",
          "scrollBarWidth": 10,
          "borderSize": 0
         },
         {
          "paddingLeft": 0,
          "height": 108,
          "paddingTop": 0,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 0,
          "paddingRight": 0,
          "shadow": false,
          "class": "HTMLText",
          "paddingBottom": 0,
          "id": "HTMLText_30F7AFD1_12F6_52B5_41AC_902D90554335",
          "minHeight": 1,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:11.06vh;font-family:'Otama.ep';\"><B>INFO</B></SPAN></SPAN></DIV></div>",
          "width": "100%",
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "data": {
           "name": "HTMLText24905"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#BBD149",
          "scrollBarWidth": 10,
          "borderSize": 0
         },
         {
          "backgroundColor": [
           "#000000"
          ],
          "scrollBarColor": "#000000",
          "creationPolicy": "delayed",
          "overflow": "scroll",
          "paddingTop": 0,
          "paddingLeft": 0,
          "gap": 10,
          "height": 7,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 1,
          "backgroundColorRatios": [
           0
          ],
          "paddingRight": 0,
          "shadow": false,
          "class": "Container",
          "backgroundColorDirection": "vertical",
          "paddingBottom": 0,
          "verticalAlign": "top",
          "id": "Container_30C72FD2_121E_72B7_4185_0FFA7496FDA6",
          "horizontalAlign": "left",
          "minHeight": 1,
          "layout": "absolute",
          "width": "100%",
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "data": {
           "name": "black line"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarWidth": 10,
          "borderSize": 0,
          "contentOpaque": false
         },
         {
          "paddingLeft": 0,
          "height": "100%",
          "paddingTop": 0,
          "borderRadius": 0,
          "scrollBarMargin": 2,
          "propagateClick": false,
          "backgroundOpacity": 0,
          "paddingRight": 0,
          "shadow": false,
          "class": "HTMLText",
          "paddingBottom": 20,
          "id": "HTMLText_0DECCFED_12FA_D26D_418B_9646D02C4859",
          "minHeight": 1,
          "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:3.59vh;font-family:'Antonio';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.15vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#99bb1b;font-size:3.59vh;font-family:'Antonio';\"><B>CONTACT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Open Sans Semibold';\">E-mail:</SPAN><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\"> Info@loremipsum.com </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Open Sans Semibold';\">Web: </SPAN><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\">www.loremipsum.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Open Sans Semibold';\">Tlf.:</SPAN><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\"> +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;font-family:'Open Sans Semibold';\">Address:</SPAN><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\"> line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.15vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.72vh;font-family:'Open Sans Semibold';\">Address line 2</SPAN></SPAN></DIV></div>",
          "width": "100%",
          "scrollBarOpacity": 0.5,
          "minWidth": 1,
          "data": {
           "name": "HTMLText"
          },
          "scrollBarVisible": "rollOver",
          "scrollBarColor": "#B3D237",
          "scrollBarWidth": 10,
          "borderSize": 0
         },
         {
          "iconBeforeLabel": true,
          "textDecoration": "none",
          "backgroundColor": [
           "#99BB1B"
          ],
          "fontColor": "#FFFFFF",
          "mode": "push",
          "rollOverBackgroundOpacity": 1,
          "paddingLeft": 0,
          "pressedBackgroundColor": [
           "#000000"
          ],
          "height": 59,
          "fontFamily": "Antonio",
          "width": 207,
          "gap": 5,
          "propagateClick": false,
          "fontStyle": "normal",
          "shadowBlurRadius": 6,
          "borderRadius": 0,
          "backgroundOpacity": 0.7,
          "backgroundColorRatios": [
           0
          ],
          "paddingRight": 0,
          "shadow": false,
          "iconWidth": 32,
          "class": "Button",
          "paddingTop": 0,
          "fontWeight": "bold",
          "backgroundColorDirection": "vertical",
          "click": "this.openLink('http://www.loremipsum.com', '_blank')",
          "paddingBottom": 0,
          "cursor": "hand",
          "verticalAlign": "middle",
          "id": "Button_0DECFFED_12FA_D26D_419B_F907711405D7",
          "horizontalAlign": "center",
          "minHeight": 1,
          "layout": "horizontal",
          "pressedBackgroundColorRatios": [
           0
          ],
          "shadowSpread": 1,
          "minWidth": 1,
          "shadowColor": "#000000",
          "iconHeight": 32,
          "label": "BOOK NOW",
          "borderColor": "#000000",
          "fontSize": "3.26vh",
          "data": {
           "name": "Button book now"
          },
          "pressedBackgroundOpacity": 1,
          "borderSize": 0
         }
        ],
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#E73B2C",
        "creationPolicy": "delayed",
        "overflow": "scroll",
        "paddingTop": 0,
        "paddingLeft": 0,
        "gap": 10,
        "height": "100%",
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "paddingRight": 0,
        "shadow": false,
        "class": "Container",
        "backgroundColorDirection": "vertical",
        "paddingBottom": 30,
        "verticalAlign": "top",
        "id": "Container_0DECDFED_12FA_D26D_41A3_11915FF353DB",
        "horizontalAlign": "left",
        "minHeight": 520,
        "layout": "vertical",
        "width": "100%",
        "scrollBarOpacity": 0.79,
        "minWidth": 100,
        "data": {
         "name": "Container text"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "contentOpaque": false
       },
       {
        "backgroundColor": [
         "#FFFFFF",
         "#FFFFFF"
        ],
        "scrollBarColor": "#000000",
        "creationPolicy": "delayed",
        "overflow": "scroll",
        "paddingLeft": 0,
        "gap": 10,
        "height": 40,
        "width": 370,
        "borderRadius": 0,
        "scrollBarMargin": 2,
        "propagateClick": false,
        "backgroundOpacity": 0.3,
        "backgroundColorRatios": [
         0,
         1
        ],
        "paddingRight": 0,
        "shadow": false,
        "class": "Container",
        "paddingTop": 0,
        "backgroundColorDirection": "vertical",
        "layout": "horizontal",
        "paddingBottom": 0,
        "verticalAlign": "top",
        "id": "Container_0DECEFED_12FA_D26D_4184_68D80FD2C88F",
        "horizontalAlign": "left",
        "minHeight": 1,
        "scrollBarOpacity": 0.5,
        "minWidth": 1,
        "data": {
         "name": "Container space"
        },
        "scrollBarVisible": "rollOver",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "contentOpaque": false
       }
      ],
      "backgroundColor": [
       "#FFFFFF",
       "#FFFFFF"
      ],
      "scrollBarColor": "#0069A3",
      "creationPolicy": "delayed",
      "overflow": "visible",
      "paddingTop": 20,
      "paddingLeft": 50,
      "gap": 0,
      "height": "100%",
      "borderRadius": 0,
      "scrollBarMargin": 2,
      "propagateClick": false,
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 50,
      "shadow": false,
      "class": "Container",
      "backgroundColorDirection": "vertical",
      "paddingBottom": 20,
      "verticalAlign": "top",
      "id": "Container_0DECBFED_12FA_D26D_41AD_EE1B8CC7BCC8",
      "horizontalAlign": "left",
      "minHeight": 1,
      "layout": "vertical",
      "width": "50%",
      "scrollBarOpacity": 0.51,
      "minWidth": 460,
      "data": {
       "name": "-right"
      },
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "contentOpaque": false
     }
    ],
    "right": "10%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarColor": "#000000",
    "creationPolicy": "delayed",
    "paddingTop": 0,
    "paddingLeft": 0,
    "overflow": "scroll",
    "shadowVerticalLength": 0,
    "gap": 10,
    "propagateClick": false,
    "scrollBarMargin": 2,
    "shadowBlurRadius": 25,
    "borderRadius": 0,
    "backgroundOpacity": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingRight": 0,
    "shadow": true,
    "shadowOpacity": 0.3,
    "shadowSpread": 1,
    "top": "5%",
    "backgroundColorDirection": "vertical",
    "class": "Container",
    "paddingBottom": 0,
    "shadowHorizontalLength": 0,
    "bottom": "5%",
    "verticalAlign": "top",
    "id": "Container_0DEF7FEC_12FA_D293_4197_332CA20EDBCF",
    "minHeight": 1,
    "shadowColor": "#000000",
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "layout": "horizontal",
    "data": {
     "name": "Global"
    },
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "left",
    "left": "10%",
    "scrollBarWidth": 10,
    "borderSize": 0
   },
   {
    "contentOpaque": false,
    "children": [
     {
      "mode": "push",
      "pressedIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_pressed.jpg",
      "paddingLeft": 0,
      "height": "75%",
      "paddingTop": 0,
      "borderRadius": 0,
      "propagateClick": false,
      "backgroundOpacity": 0,
      "paddingRight": 0,
      "transparencyActive": false,
      "shadow": false,
      "class": "IconButton",
      "cursor": "hand",
      "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
      "paddingBottom": 0,
      "verticalAlign": "middle",
      "id": "IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4",
      "horizontalAlign": "center",
      "minHeight": 50,
      "width": "25%",
      "data": {
       "name": "X"
      },
      "maxWidth": 60,
      "minWidth": 50,
      "rollOverIconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4_rollover.jpg",
      "iconURL": "skin/IconButton_0DEC0FED_12FA_D26D_41B1_C01AE2D2C1D4.jpg",
      "borderSize": 0,
      "maxHeight": 60
     }
    ],
    "right": "10%",
    "creationPolicy": "delayed",
    "overflow": "visible",
    "paddingLeft": 0,
    "gap": 10,
    "paddingTop": 20,
    "borderRadius": 0,
    "scrollBarMargin": 2,
    "propagateClick": false,
    "backgroundOpacity": 0,
    "paddingRight": 20,
    "shadow": false,
    "class": "Container",
    "top": "5%",
    "layout": "vertical",
    "bottom": "80%",
    "paddingBottom": 0,
    "verticalAlign": "top",
    "id": "Container_0DEC1FED_12FA_D26D_41AE_8CE7699C44D8",
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "data": {
     "name": "Container X global"
    },
    "scrollBarVisible": "rollOver",
    "horizontalAlign": "right",
    "scrollBarColor": "#000000",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "left": "10%"
   }
  ],
  "right": "0%",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "overflow": "scroll",
  "paddingTop": 0,
  "paddingLeft": 0,
  "gap": 10,
  "propagateClick": false,
  "scrollBarMargin": 2,
  "borderRadius": 0,
  "backgroundOpacity": 0.6,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "shadow": false,
  "class": "Container",
  "top": "0%",
  "backgroundColorDirection": "vertical",
  "layout": "absolute",
  "bottom": "0%",
  "click": "this.setComponentVisibility(this.Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08, false, 0, null, null, false)",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "id": "Container_0DEC3FED_12FA_D26D_419F_4067E8C6DA08",
  "minHeight": 1,
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "data": {
   "name": "--CONTACT"
  },
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "visible": false,
  "left": "0%",
  "scrollBarWidth": 10,
  "borderSize": 0
 },
 {
  "textShadowBlurRadius": 10,
  "fontColor": "#FFFFFF",
  "textShadowColor": "#000000",
  "paddingLeft": 0,
  "fontSize": 30,
  "height": 95.4,
  "fontFamily": "Otama.ep",
  "width": 892.8,
  "text": "ĐÌNH BÌNH ĐỨC - Số 3 Lê Lợi, Phường Long Xuyên, Tỉnh An GIang",
  "borderRadius": 0,
  "fontStyle": "normal",
  "propagateClick": false,
  "backgroundOpacity": 0,
  "textShadowVerticalLength": 0,
  "paddingRight": 0,
  "shadow": false,
  "class": "Label",
  "paddingTop": 0,
  "top": 46.1,
  "fontWeight": "normal",
  "paddingBottom": 0,
  "verticalAlign": "top",
  "id": "Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B",
  "minHeight": 1,
  "textDecoration": "none",
  "minWidth": 1,
  "textShadowOpacity": 1,
  "data": {
   "name": "text 2"
  },
  "borderColor": "#000000",
  "textShadowHorizontalLength": 0,
  "borderSize": 8,
  "horizontalAlign": "left",
  "left": 80.6
 },
 {
  "contentOpaque": false,
  "backgroundColor": [
   "#B3D237"
  ],
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "paddingLeft": 0,
  "overflow": "scroll",
  "shadowVerticalLength": 0,
  "width": 10,
  "gap": 10,
  "height": 63.1,
  "propagateClick": false,
  "scrollBarMargin": 2,
  "paddingTop": 0,
  "shadowBlurRadius": 10,
  "borderRadius": 0,
  "backgroundOpacity": 1,
  "backgroundColorRatios": [
   0
  ],
  "paddingRight": 0,
  "shadow": true,
  "shadowOpacity": 0.5,
  "shadowSpread": 1,
  "top": 37.95,
  "backgroundColorDirection": "vertical",
  "class": "Container",
  "paddingBottom": 0,
  "shadowHorizontalLength": 0,
  "verticalAlign": "top",
  "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
  "minHeight": 1,
  "layout": "absolute",
  "shadowColor": "#000000",
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "data": {
   "name": "green block"
  },
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "left",
  "left": 61,
  "scrollBarWidth": 10,
  "borderSize": 0
 }
], 
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "creationPolicy": "delayed",
 "overflow": "visible",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingLeft": 0,
 "gap": 10,
 "height": "100%",
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "paddingRight": 0,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getKey": function(key){  return window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = self.getPixels(w.get('titleFontSize')) + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = result[1]; var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } }
 },
 "shadow": false,
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "id": "rootPlayer",
 "horizontalAlign": "left",
 "minHeight": 20,
 "layout": "absolute",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "data": {
  "name": "Player468"
 },
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scrollBarWidth": 10,
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.ThumbnailGrid_2F8BA686_0D4F_6B7E_419C_EB65DD1505BB_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "borderSize": 0,
 "contentOpaque": false
})