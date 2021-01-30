export function getFilters() {
    return new Promise((resolve) => {
        resolve({
            data: {

                "stat": [
                    {
                        "stat": {
                            "type": "centroid",
                            "composition": "mean"
                        },
                        "start": 0.1954377144575119,
                        "end": 16148.474609375
                    },
                    {
                        "stat": {
                            "type": "centroid",
                            "composition": "skew"
                        },
                        "start": -3.9848320484161377,
                        "end": 4.323379039764404
                    },
                    {
                        "stat": {
                            "type": "centroid",
                            "composition": "stddev"
                        },
                        "start": 0,
                        "end": 5658.9443359375
                    },
                    {
                        "stat": {
                            "type": "confidence",
                            "composition": "median"
                        },
                        "start": -1.5820367336273191,
                        "end": 0.9999779462814332
                    },
                    {
                        "stat": {
                            "type": "confidence",
                            "composition": "min"
                        },
                        "start": -1.899925708770752,
                        "end": 0.9996426701545716
                    },
                    {
                        "stat": {
                            "type": "crest",
                            "composition": "min"
                        },
                        "start": 0,
                        "end": 26.1320743560791
                    },
                    {
                        "stat": {
                            "type": "duration",
                            "composition": "none"
                        },
                        "start": 127.7097505668644,
                        "end": 1102.947845804989
                    },
                    {
                        "stat": {
                            "type": "harmonicity",
                            "composition": "mean"
                        },
                        "start": 1.0513515036336685e-7,
                        "end": 0.996932566165924
                    },
                    {
                        "stat": {
                            "type": "harmonicity",
                            "composition": "min"
                        },
                        "start": 3.8111718225763986e-8,
                        "end": 0.9963908791542052
                    },
                    {
                        "stat": {
                            "type": "loudness",
                            "composition": "max"
                        },
                        "start": -157.2265625,
                        "end": -1.9263622760772705
                    },
                    {
                        "stat": {
                            "type": "loudness",
                            "composition": "stddev"
                        },
                        "start": 0.00000762939453125,
                        "end": 68.92930603027344
                    },
                    {
                        "stat": {
                            "type": "peak",
                            "composition": "median"
                        },
                        "start": -201.21463012695312,
                        "end": 0.518946647644043
                    },
                    {
                        "stat": {
                            "type": "peak",
                            "composition": "stddev"
                        },
                        "start": 0,
                        "end": 152.9132843017578
                    },
                    {
                        "stat": {
                            "type": "peakharm",
                            "composition": "median"
                        },
                        "start": 3.386227553072655e-16,
                        "end": 0.9935100674629213
                    },
                    {
                        "stat": {
                            "type": "pitch",
                            "composition": "median"
                        },
                        "start": 0.443578839302063,
                        "end": 9559.681640625
                    },
                    {
                        "stat": {
                            "type": "pitch",
                            "composition": "stddev"
                        },
                        "start": 0,
                        "end": 4543.5341796875
                    },
                    {
                        "stat": {
                            "type": "rolloff",
                            "composition": "max"
                        },
                        "start": 32.2998046875,
                        "end": 22045.158203125
                    },
                    {
                        "stat": {
                            "type": "rolloff",
                            "composition": "min"
                        },
                        "start": 0.443578839302063,
                        "end": 21898.654296875
                    },
                    {
                        "stat": {
                            "type": "skewness",
                            "composition": "median"
                        },
                        "start": -0.8764699101448059,
                        "end": 69.98931121826172
                    },
                    {
                        "stat": {
                            "type": "spread",
                            "composition": "median"
                        },
                        "start": 0.443578839302063,
                        "end": 8170.07275390625
                    }
                ],
                "meta": [
                    {
                        key: "day",
                        values: [
                            "monday",
                            "tuesday",
                            "wednesday",
                            "thursday",
                            "friday",
                            "saturday",
                            "sunday",
                        ],
                    },
                    {
                        "key": "file",
                        "values": [
                            "10_0001_hoseladeoffe_IVY.wav",
                            "10_0003_hoseladeoffe_IVY_UQW.wav",
                            "10_0004_hoseladeoffe_IVY_MAG_XAY.wav",
                            "11_0001_cheroweee_TAB.wav",
                            "11_0002_cheroweee_TAB_HUG.aif",
                            "12_0001_Jazzyshazzy_HUG.aif",
                            "12_0002_Jazzyshazzy_HUG_CRG.wav",
                            "12_0003_Jazzyshazzy_HUG_XAY.wav",
                            "13_0001_funwithfeedback_CRG.wav",
                            "13_0002_funwithfeedback_CRG_WGX.wav",
                            "14_0001_birds_XAY.wav",
                            "14_0002_birds_XAY_UQW.wav",
                            "14_0003_birds_XAY_UQW_XAY.wav",
                            "15_0001_ghost_XAY.wav",
                            "15_0003_ghost12345_XAY_HFC+19_0005_Club mate_UYM_HUG_TLH EDIT.wav",
                            "15_0003_ghost12345_XAY_HFC.wav",
                            "16_0001_horn_XAY.wav",
                            "16_0002_horn_XAY_WGX.wav",
                            "17_00001_Ucranian report.wav",
                            "17_00002_Ucranian report but its actually Happy Birthday by Putin_HUG.aif",
                            "18_0001_Geige1_HFC.wav",
                            "18_0002_Geige2_HFC.wav",
                            "18_0003_Geige3_HFC  .wav",
                            "18_0004_Geige4_HFC.wav",
                            "18_0005_Geige5_HFC.wav",
                            "18_0006_Harmonica1_HFC.wav",
                            "18_0007_Harmonica2_HFC.wav",
                            "18_0008_Harmonica3_HFC.wav",
                            "18_0009_Geigen12345_HFC_UQW.wav",
                            "18_0009_Violine1_HFC .wav",
                            "18_0010_Violine2_HFC.wav",
                            "18_0011_Violine3_HFC .wav",
                            "18_0012_Violine4_HFC .wav",
                            "18_0013_Violine5_HFC    .wav",
                            "18_0014_Harmonica123_HFC_UQW.wav",
                            "18_0015_Harmonica123pad_HFC_UQW_UQW.wav",
                            "18_0016_Harmonica123utrapad_HFC_UQW_UQW_UQW.wav",
                            "19_0001_Club mate.wav",
                            "19_0002_Club mate_UYM.aif",
                            "19_0003_Club mate_UYM.aif",
                            "19_0004_Club mate_UYM.aif",
                            "19_0005_Club mate_UYM_HUG.aif",
                            "20_0001_Chinese report 1.wav",
                            "20_0002_Chinese report 2.wav",
                            "21_0001_oiseaux_XAY.wav",
                            "22_0001_shaker_XAY.wav",
                            "22_0002_shaker_XAY_UQW.wav",
                            "22_0003_shaker_XAY_UQW_UQW.wav",
                            "23_0001_whuu_AZD.wav",
                            "23_0002_whuu_AZD_CRG.wav",
                            "23_0003_whuu_AZD_XAY.wav",
                            "24_0001_JuraWald.wav",
                            "24_0002_JuraWald_UQW.wav",
                            "24_0003_JuraWald_whistlesGROUP_UQW.wav",
                            "24_0004_JuraWald_TEXTURE_UQW.wav",
                            "25_0001_meshesoftheearlymorning_WGX.wav",
                            "25_0002_meshesoftheearlymorning_WGX_UQW.wav",
                            "25_0003_meshesoftheearlymorning_WGX_MAG.wav",
                            "25_0004_meshesoftheearlymorning_WGX_UQW_XAY_XAY.wav",
                            "25_0005_meshesoftheearlymorning_WGX_UQW_XAY.wav",
                            "26_0001_suspense_KXE.aif",
                            "26_0002_suspense_KXE_HUG.aif",
                            "26_0003_suspense_KXE_HUG_XAY.wav",
                            "27_0001_incontent_CRG & AZD .wav",
                            "27_0002_incontent_CRG & AZD_UQW.wav",
                            "27_0003_incontent_CRG & AZD_XAY.wav",
                            "28_0001_tnetnocni_AZD&CRG.wav",
                            "29_0001_celloktrone_viber_UQW.wav",
                            "29_0002_celloktrone_viber_UQW_UQW.wav",
                            "29_0003_celloktrone_viber2_UQW.wav",
                            "29_0004_celloktrone_viber2_UQW_XAY.wav",
                            "29_0005_celloktrone_viber_UQW_XAY.wav",
                            "2_0001_zzzzerreissprobe_UQW.wav",
                            "2_0002_zzzzerreissprobe_UQW_YAR.aif",
                            "2_0003_zzzzerreissprobe_UQW_OZK.wav",
                            "2_0004_zzzzerreissprobe_JAR_OZK.wav",
                            "2_0004_zzzzerreissprobe_JAR_OZK_TLH.wav",
                            "2_0005_zzzzerreissprobe_UQW_CRG.wav",
                            "2_0006_zzzzerreissprobe_JAR_OZK_HUG.aif",
                            "2_0007_zzzzerreissprobe_JAR_OZK_XAY.wav",
                            "30_0001_nousnavonspasdeau_WGX.wav",
                            "30_0002_nousnavonspasdeau_WGX_TAB.aif",
                            "31_0001_udäpickedup_UYM.aif",
                            "31_0002_udäpickedup_UYM_UQW.wav",
                            "31_0004_udäpickedup_UYM_UKW_MAG_XAY.wav",
                            "32_0002_Maxdrums_MAG_UYM.aif",
                            "32_0003_Maxdrums_MAG_UYM_XAY.wav",
                            "32_0004_Maxdrums_MAG_UYM_ZGT.wav",
                            "33_0001_DerTeufelAmKlavier_HUG.aiff",
                            "33_0002_DevilPiano2_HUG.aif",
                            "33_0003_DerTeufelAmKlavier_HUG_UQW.wav",
                            "33_0004_DerTeufelAmKlavier_HUG_UQW.aif",
                            "33_0005_DevilPiano2_HUG_XAY.wav",
                            "34_0001_guitarmonixrRIDDIM_UQW.wav",
                            "34_0002_guitarmonixrRIDDIM_UQW_TAB.wav",
                            "34_0003_guitarmonixrRIDDIM_UQW_XAY.wav",
                            "35_0001_clickykicky_UQW.wav",
                            "35_0002_clickykicky_UQW_UQW.wav",
                            "35_0003_clickykicky_UQW_UQW_HUG.aif",
                            "35_0004_clickykicky_UQW_UQW_HUG_AZD.wav",
                            "36_0001_i_love_youre_stories_UQW.wav",
                            "36_0002_i_love_youre_stories_UQW_XAY.wav",
                            "36_0003_i_love_youre_stories_UQW_XAY_XAY.wav",
                            "36_0004_i_love_youre_stories_UQW_XAY_XAY_UQW.wav",
                            "37_0001_light_and_colours_UQW & TAB.wav",
                            "37_0002_light_and_colours_UQW & TAB_XAY.wav",
                            "38_0001_ichkannkeinrussich_MAG.wav",
                            "38_0002_ichkannkeinrussisch_MAG_HUG.aif",
                            "39_0001_fever_KXE.wav",
                            "39_0002_fever_KXE_HUG.aif",
                            "39_0003_fever_KXE_XAY.wav",
                            "3_0001_rigidrone_HUG.wav",
                            "3_0002_rigidrone_HUG_YAR.aiff",
                            "3_0003_rigidrone_HUG_YAR_UYM.aif",
                            "3_0003_rigidrone_HUG_YAR_UYM_YAR.aif",
                            "3_0004_rigidrone_HUG_YAR_UYM_AZD.wav",
                            "3_0005_rigidrone_HUG_YAR_UYM_AZD_HUG.aif",
                            "40_0001_intheroom_KXE.wav",
                            "40_0002_intheroom_KXE_HUG.aif",
                            "41_0001_troete_WGX.wav",
                            "41_0002_troete_WGX_CRG.wav",
                            "41_0003_troete_AMP.wav",
                            "42_0001_ninenine_CRG.wav",
                            "42_0002_ninenine_CRG_AMP.wav",
                            "42_0003_ninenine_CRG_AMP_ZAG.wav",
                            "42_0004_ninenine_CRG_AMP_ZAG_MAG.wav",
                            "42_0005_Tape_NXQ.wav",
                            "43_0001_Copycat_ZGT.wav",
                            "43_0002_Copycat_ZGT_TLH.wav",
                            "43_0003_Copycat_KXE.wav",
                            "43_0004_Copycat_ZGT_TLH_KXE_UYM.aif",
                            "44_0001_String_NXQ.aif",
                            "44_0002_String_NXQ_CRG.wav",
                            "45_0001_i don_t understand_UYM.aif",
                            "46_0001_ghostbell001_TLH.wav",
                            "47_0001_vaporizer_001_TLH.wav",
                            "47_0002_vaporizer_TLH_UYM.aif",
                            "48_0001_intensify_001_TLH.wav",
                            "48_0002_intensify_001_TLH_AZD.wav",
                            "49_0001expiration_001_TLH.wav",
                            "4_0001_badmoodF_OZK_TLH.wav",
                            "4_0002_badmoodI_OZK_UYM.aif",
                            "4_0003_badmoodI_OZK_UYM_WGX.wav",
                            "50_0001_aromat_IVY.wav",
                            "50_0002_aromat_IVY_OZK.wav",
                            "50_0003_aromat_IVY_UQW.wav",
                            "51_0001_chicken_UYM.aif",
                            "51_0002_chicken_UYM.aif",
                            "5_0002_bliblablo_MAG_YAR.aif",
                            "5_0003_bliblablo_MAG_YAR_UQW.wav",
                            "5_0004_bliblabloRISER_MAG_YAR_UQW_UQW.wav",
                            "5_0005_bliblablo_MAG_YAR_XAY.wav",
                            "5_0006_bliblablo_MAG_YAR_UQW_UQW.wav",
                            "5_0007_bliblablo_MAG_YAR_UQW_UQW_UQW.wav",
                            "6_0001_ohdahsöti_WGX.wav",
                            "6_0002_ohdahsöti_WGX_TAB.wav",
                            "6_0003_ohdahsöti_WGX_TAB_YAR.aif",
                            "6_0004_ohdasöti_WGX_HUG.aif",
                            "7_0001_sander_AZD.wav",
                            "7_0001_sander_AZD_TLH.wav",
                            "7_0002_sander_IVY.wav",
                            "8_0003_oooooo_KXE.aif",
                            "8_0004_oooooo_IVY.wav",
                            "9_0001_hackbrettoverdrive_TAB.aif",
                            "9_0002_hackbrettoverdrive_TAB_UYM.aif",
                            "9_0003_hackbrettoverdrive_TAB_XAY.wav",
                            "Chicken drums .wav",
                            "exemple only - 1_0001_violinImpulse_POL.aif",
                            "exemple only - 1_0002-violinImpulse_MUT.aif",
                            "ghost1.wav",
                            "ghost2.wav",
                            "ghost3.wav",
                            "ghost4.wav"
                        ]
                    }
                ]
            }
        });
    })
}

export function runAnalysis(request) {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            if (request) {
                let slices = [];
                for (let i = 0; i < 256; i++) {
                    const slice = {
                        name: `slice${i}`,
                        x: i,
                        y: Math.random(),
                        z: Math.random() * 20,
                    }
                    slices.push(slice);
                }

                resolve({
                    data: slices
                });
            } else {
                reject('400 Bad Request');
            }
        }, 1000);
    })
}