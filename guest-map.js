/* ==========================================================================
   MİSAFİR HARİTASI — "misafirlerimiz şu ülkelerden geldi"
   BU DOSYA ÜRETİLİR: Hancı_kaynak/dunya-haritasi/guest-map.template.js düzenlenir → node build-map.js
   Kullanım: renderGuestMap(kutu, lang, [['DE', 7], ['GB', 12], …])  — ISO 3166 iki harf + misafir/rezervasyon sayısı
   (sayısız ['DE','GB'] de olur). Sıra = haritaya eklenme sırası; sondaki ülke "son eklenen" olarak parlar.
   Isı haritası: renk koyuluğu sayının logaritmasıyla 5 kademe (tek ülke diğerlerini soldurmasın). Sayılar sitede gösterilmez.
   ========================================================================== */
(function () {
  const MAP = {"w":1000,"h":435,"step":5,"row":4.33,"cols":200,"ist":[546,120],"c":{"CA":"247,66|01v01w01y01z05h05i05j07807907a07b07c07d07e07f07g07h0ay0b00b10b20co0cs0ct0cu0cx0cy0gh0gl0gm0gn0i10id0ie0if0lx0nl0nn0no0np0ns0nv0nw0nx0ny0nz0rk0rl0rm0rn0rq0rr0t10t20t30t80ta0tb0tc0td0tg0ti0x20x30x40x50x90yk0yl0yn0yo0yp0yq0yr0yu0yv0yz0z00z10z20z312o12p12q12r12s12t12u12v14814914a14b14f14g14i14j14k14l14m14n14o14p18e19g19h19i19j19k19l19m19n19o19p19q19r19s19u19y19z1a01a11a31a41a81a91do1dp1dq1dr1ds1dt1du1dv1dw1dx1dy1ey1ez1f01f11f21f31f41f51f61f71f81f91fa1fb1fd1fe1ff1fg1fh1fi1fj1fk1fl1fm1fn1fs1ft1fu1fv1j91ja1jb1jc1jd1je1jf1jg1jh1ji1ki1kj1kk1kl1km1kn1ko1kp1kq1kr1ks1kt1ku1kv1kw1kx1ky1kz1l01l11l21l31l51lb1lc1ld1lf1ou1ov1ow1ox1oy1oz1p01p11p21p31q11q21q31q41q51q61q71q81q91qa1qb1qc1qd1qe1qf1qg1qh1qi1qj1qk1ql1qm1qn1qp1qq1qv1qw1qx1uf1ug1uh1ui1uj1uk1ul1um1vk1vl1vm1vn1vo1vp1vq1vr1vs1vt1vu1vv1vw1vx1vy1vz1w01w11w21w31w41w51wg20120220320420520620721321421521621721821921a21b21c21d21e21f21g21h21i21j21k21l21m21n21v21w21x25l25m25n25o25p25q26o26p26q26r26s26t26u26v26w26x26y26z27027127227327427527627727g27h27i27l2b82ba2bb2c92ca2cb2cc2cd2ce2cf2cg2ch2ci2cj2ck2cl2cm2cn2co2cp2cq2cr2cz2d02d12d22d32d42ht2hu2hv2hw2hx2hy2hz2i02i12i22i32i42i52i62i72i82i92ia2ib2ic2id2ij2ik2il2im2in2io2ip2nd2ne2nf2ng2nh2ni2nj2nk2nl2nm2nn2no2np2nq2nr2ns2nt2nu2nv2nw2nx2o22o32o42o52o62o72o82o92sx2sy2sz2t02t12t22t32t42t52t62t72t82t92ta2tb2tc2td2te2tf2tg2th2ti2tj2tl2tm2tn2to2tp2tq2tr2ts2tt2tu2tv2yg2yh2yi2yj2yk2yl2ym2yn2yo2yp2yq2yr2ys2yt2yu2yv2yw2yx2yy2yz2z02z12z22z52z62z72z82z92za2zb2zc2zd2ze2zf34134234334434534634734834934a34b34c34d34e34f34g34h34i34j34k34l34m34n34o34p34q34r34s34t34u34v34w34x34z39l39m39n39o39p39q39r39s39t39u39v39w39x39y39z3a03a13a23a33a43a53a63a73a83a93aa3ab3ac3af3ai3fl3fm3fn3fo3fp3fq3fr3fs3ft3fu3fv3fx3fy3g23g33l83l93la3lb3lc3ld3le3lg3lh3qt3qu3qv3qw3qx3qy3r13r23r33wd3we3wf3wl41x","GL":"393,25|02702802902a02b02c02d02e07j07k07l07m07n07o07p07q07r07s07t07u07v07w07x07y07z0800810d20d30d40d50d60d70d80d90da0db0dc0dd0de0df0dg0dh0di0dj0ik0il0im0in0io0ip0iq0ir0is0it0iu0iv0iw0ix0iy0iz0j00j10j20j30o80o90oa0ob0oc0od0oe0of0og0oh0oi0oj0ok0ol0om0on0oo0ts0tt0tu0tv0tw0tx0ty0tz0u00u10u20u30u40u50u60zd0ze0zf0zg0zh0zi0zj0zk0zl0zm0zn0zo0zp14x14y14z1501511521531541551561571ai1aj1ak1al1am1an1ao1ap1aq1ar1g01g11g21g31g41g51g61g71lk1ll1lm1ln1lo1lp1lq1r41r51r61r71r81wp1wq1wr22922a","RU":"683,45|08s08u08v0960970et0eu0ev0kc0kf0mf0mg0mh0mj0pi0pj0pv0pw0px0py0pz0q00q10q20q30q40qe0qf0qg0qi0v10vc0vd0ve0vf0vg0vh0vi0vj0vk0vl0vm0vo0vt0w00xh0xi0xj0xk10l10s10w10x10y10z11011111211311411511611711811911a11b11c11d11e11f11l11m11n11o12w12x12y12z13013113213313413513613716716b16c16e16f16g16i16j16k16l16m16n16o16p16q16r16s16t16u16v16w16x16y16z17017117217317417517617717817917a17b17c17d18g18h18i18j18k18l18m18n18o18p18q18r18s18t18u18v18w18x18y18z1bg1bh1bi1bt1bu1bv1bx1bz1c01c11c21c31c41c51c61c71c81c91ca1cb1cc1cd1ce1cf1cg1ch1ci1cj1ck1cl1cm1cn1co1cp1cq1cr1cs1ct1cu1cv1cw1cx1cy1cz1d01d11d21d31d41d51d61d71e01e11e21e31e41e51e61e71e81e91ea1eb1ec1ed1ee1ef1eg1eh1ei1ej1gz1h01h11h21h31h71h81h91ha1hb1hc1hd1he1hf1hg1hh1hi1hj1hk1hl1hm1hn1ho1hp1hq1hr1hs1ht1hu1hv1hw1hx1hy1hz1i01i11i21i31i41i51i61i71i81i91ia1ib1ic1id1ie1if1ig1ih1ii1ij1ik1il1im1in1io1ip1iq1ir1is1it1jk1jl1jm1jn1jo1jp1jq1jr1js1jt1ju1jv1jw1jx1jy1jz1k01k21k31k41mk1ml1mp1mq1mr1ms1mt1mu1mv1mw1mx1my1mz1n01n11n21n31n41n51n61n71n81n91na1nb1nc1nd1ne1nf1ng1nh1ni1nj1nk1nl1nm1nn1no1np1nq1nr1ns1nt1nu1nv1nw1nx1ny1nz1o01o11o21o31o41o51o61o71o81o91oa1ob1oc1od1oe1of1og1oh1p41p51p61p71p81p91pa1pb1pc1pd1pe1pf1pg1ph1pi1s41s51s61s71s81s91sa1sb1sc1sd1se1sf1sg1sh1si1sj1sk1sl1sm1sn1so1sp1sq1sr1ss1st1su1sv1sw1sx1sy1sz1t01t11t21t31t41t51t61t71t81t91ta1tb1tc1td1te1tf1tg1th1ti1tj1tk1tl1tm1tn1to1tp1tq1tr1ts1tt1tu1tv1tw1uo1up1uq1ur1us1ut1uu1uv1uw1ux1uy1uz1v01v11v21xp1xq1xr1xs1xt1xu1xv1xw1xx1xy1xz1y01y11y21y31y41y51y61y71y81y91ya1yb1yc1yd1ye1yf1yg1yh1yi1yj1yk1yl1ym1yn1yo1yp1yq1yr1ys1yt1yu1yv1yw1yx1yy1yz1z01z11z21z31z41z51z61z71z81z91za1zb1zd1ze1zf1zg1zh1zi20820920a20c20e20f20g20h23823923a23b23c23d23e23f23g23h23i23j23k23l23m23n23o23p23q23r23s23t23u23v23w23x23y23z24024124224324424524624724824924a24b24c24d24e24f24g24h24i24j24k24l24m24n24o24p24q24r24s24w24x24y24z25s25w28s28t28u28v28w28x28y28z29029129229329429529629729829929a29b29c29d29e29f29g29h29i29j29k29l29m29n29o29p29q29r29s29t29u29v29w29x29y29z2a02a12a22a32a42a52a62a72a82a92aa2ac2ag2bd2be2eb2ec2ed2ee2ef2eg2eh2ei2ej2ek2el2em2en2eo2ep2eq2er2es2et2eu2ev2ew2ex2ey2ez2f02f12f22f32f42f52f62f72f82f92fa2fb2fc2fd2fe2ff2fg2fh2fi2fj2fk2fl2fm2fn2fo2fp2fq2g02gw2gx2gy2jw2jx2jy2jz2k02k12k22k32k42k52k62k72k82k92ka2kb2kc2kd2ke2kf2kg2kh2ki2kj2kk2kl2km2kn2ko2kp2kq2kr2ks2kt2ku2kv2kw2kx2ky2kz2l02l12l22l32l42l52l62l72l82l92la2lk2ll2lm2mg2ph2pi2pj2pk2pl2pm2pn2po2pp2pq2pr2ps2pt2pu2pv2pw2px2py2pz2q02q12q22q32q42q52q62q72q82q92qa2qb2qc2qd2qe2qf2qg2qh2qi2qj2qk2ql2qm2qn2qo2qp2qq2qr2qs2qt2r42r52r82v22v32v42v52v62v72v82v92va2vb2vc2vd2ve2vf2vn2vo2vp2vq2vr2vs2vt2vu2vv2vw2vx2vy2vz2w02w12w22w32w42w52w62w72w82w92wa2wb2wc2wd2we2wf2wp2wq30l30m30n30o30p30q30r30s30t30u30v30w30x30y31831931a31b31c31d31e31f31g31h31i31j31k31l31m31n31o31p31q31r31v31w31x31y31z32032132232936836936a36b36c36d36e36h36i36j36t36u36v36w36x36y36z37037137437537637737837937a37b37c37g37h37i37j37k37l37m37n37u3bt3bu3bv3bw3cg3ch3cr3cs3cv3d03d13d23d33d43d53d63d73he3hf3hg3hh3in3ip3iq3is3mx3my3mz3n03n13o83o93oa3oc3sf3sh3si3sj3sk3sl3tt3tu3y23y33y43y53zc3zd43p43q44w","NO":"503,51|0dw0dx0dy0dz0jh15s15u15v1b91bb1gt1md1rv1rw1xe1xf22y22z28h28i28j2e1","US":"218,124|13o13p13q13r13s17u17v17w17x17y19519619719819919a19b19c19d19e19f1dd1de1df1dg1dh1di1dj1dk1dl1dm1dn1ep1eq1er1es1et1eu1ev1ew1ex1iz1j01j11j21j31j41j51j61j71j81k61k71k81k91ka1kb1kc1kd1ke1kf1kg1kh1oj1ok1ol1om1on1oo1op1oq1or1os1ot1ps1pt1pu1pv1pw1px1py1pz1q01u61u71u81u91ua1ub1uc1ud1ue1va1vb1vc1vd1ve1vf1vg1vh1vi1vj1zq1zr1zs1zt1zu1zv1zw1zx1zy1zz20020s20t20u20v20w20x20z21121225a25b25c25d25e25f25g25h25i25j25k26d26e26f26g26i26n2ax2ay2az2b02b22b92by2gk2hs2m42nc2rn2sf2x632h3f63f73f83f93fa3fb3fc3fd3fe3ff3fg3fh3fi3fj3fk3kp3kq3kr3ks3kt3ku3kv3kw3kx3ky3kz3l03l13l23l33l43l53l63l73lf3q93qa3qb3qc3qd3qe3qf3qg3qh3qi3qj3qk3ql3qm3qn3qo3qp3qq3qr3qs3qz3r03vs3vt3vu3vv3vw3vx3vy3vz3w03w13w23w33w43w53w63w73w83w93wa3wb3wc3wg3wh3wi41b41c41d41e41f41g41h41i41j41k41l41m41n41o41p41q41r41s41t41u41v41w41y41z42042142246v46w46x46y46z47047147247347447547647747847947a47b47c47d47e47f47g47h47i47j47k47l4cf4cg4ch4ci4cj4ck4cl4cm4cn4co4cp4cq4cr4cs4ct4cu4cv4cw4cx4cy4cz4d04d14d24d34hy4hz4i04i14i24i34i44i54i64i74i84i94ia4ib4ic4id4ie4if4ig4ih4ii4ij4ik4il4nj4nk4nl4nm4nn4no4np4nq4nr4ns4nt4nu4nv4nw4nx4ny4nz4o04o14o24o34o44o54o64t24t34t44t54t64t74t84t94ta4tb4tc4td4te4tf4tg4th4ti4tj4tk4tl4tm4tn4to4tp4yn4yo4yp4yq4yr4ys4yt4yu4yv4yw4yx4yy4yz4z04z14z24z34z44z54z64z74z84z954854954a54b54c54d54e54f54g54h54i54j54k54l54m54n54o54p54q54r59u59v59w59x59y59z5a05a15a25a35a45a55a65a75a85a95aa5fi5fj5fk5fl5fm5fn5fo5fp5fq5fr5fs5ft5l45l55l65l75la5le5qo5qp5qx5qy5w95wi","FI":"533,49|1bc1bd1be1bf1gx1gy1mi1mj1s11s21s31xl1xm1xn1xo234235236237","SE":"512,55|1gu1gv1gw1me1mf1mg1rx1ry1rz1xg1xh1xi23023128k28l28m28n2e42e52jp","IS":"435,47|1lx1ly1lz1m01rh1ri1rj","FO":"460,55|22r","AX":"520,61|233","GB":"468,80|2dw2jg2jh2p02p12ul2um30430530635p35q","EE":"534,66|2ea","DK":"496,73|2jn2p6","LV":"532,71|2jt2ju2jv","IM":"463,79|2oz","LT":"530,76|2pc2pd2pe","BY":"541,81|2pf2pg2uy2uz2v02v130h30i30j30k","IE":"454,82|2ui2uj302","DE":"498,89|2ur2us30930a30b30c35u35v35w35x3bd3be3bf3gy3h0","PL":"520,85|2uu2uv2uw2ux30d30e30f30g35y35z3603613bj3bk","KZ":"638,97|2vg2vh2vi2vj2vk2vl2vm30z31031131231331431531631736f36g36k36l36m36n36o36p36q36r36s3bx3by3bz3c03c13c23c33c43c53c63c73c83c93ca3cb3cc3cd3ce3cf3hi3hj3hk3hl3hm3hn3ho3hp3hq3hr3hs3ht3hu3hv3hw3hx3hy3hz3i03n23n43n53n63n73n83n93na3nb3nc3nd3ne3nf3ng3nh3ni3sp3sq3sr3ss3st3su3sv3sw3sx3sy3sz3t03t13t23t33y83y93yd3ye3yf3yg3yh3yi3yj3yk3yl43t43u44044144244344649k","NL":"487,85|30835t","CN":"740,134|31s31t31u37d37e37f3cw3cx3cy3cz3i13ig3ih3ii3ij3ik3il3im3io3nj3nk3nl3nm3o13o23o33o43o53o63o73t43t53t63t73tk3tl3tm3tn3to3tp3tq3tr3ts3ym3yn3yo3yp3yq3yr3ys3yt3z23z33z43z53z63z73z83z93za3zb44744844944a44b44c44d44e44m44n44o44p44q44r44s44t44u44v49q49r49s49t49u49v49w49x49y49z4a04a14a24a34a44a54a64a74a84a94aa4ab4ac4ad4f84f94fa4fb4fc4fd4fe4ff4fg4fh4fi4fj4fk4fl4fm4fn4fo4fp4fq4fr4fs4ft4fu4fv4fx4ks4kt4ku4kv4kw4kx4ky4kz4l04l14l24l34l44l54l64l74l84l94la4lb4lc4ld4qd4qe4qf4qg4qh4qi4qj4qk4ql4qm4qn4qo4qp4qq4qr4qs4qt4qu4qv4qw4qx4qy4qz4r04r14vx4vy4vz4w04w14w24w34w44w54w64w74w84w94wa4wb4wc4wd4we4wf4wg4wh4wi4wj51j51k51l51m51n51o51p51q51r51s51t51u51v51w51x51y51z52052152252352457357457557657757857957a57b57c57d57e57f57g57h57i57j57k57l57m57n57o5co5cp5cq5cr5cs5ct5cu5cv5cw5cx5cy5cz5d05d15d25d35d45d55d65d75d85d95i85i95ia5ib5ic5id5ie5if5ig5ih5ii5ij5ik5il5im5in5io5ip5iq5ir5is5it5nv5nw5nx5ny5nz5o05o15o25o35o45o55o65o75o85o95oa5ob5oc5od5oe5tg5ti5tm5tn5to5tp5tq5tr5ts5tt5tu5tv5tw5tx5z75z85z95za5zb5zc5zd5ze5zf5zg5zh5zi64q64r64s64t64u64v64w64x64y64z6506516ab6ac6ad6ae6af6ag6ah6ai6aj6ak6al6fv6fw6fz6g06g16g26g36r56wp","BE":"485,90|35s","UA":"550,95|3623633643653663673bl3bm3bn3bo3bp3bq3br3bs3h63h73h83h93ha3hb3hc3hd3mt3mu3mv","MN":"728,102|3723733ci3cj3ck3cl3cm3cn3co3cp3cq3ct3cu3i23i33i43i53i63i73i83i93ia3ib3ic3id3ie3if3nn3no3np3nq3nr3ns3nt3nu3nv3nw3nx3ny3nz3o03t83t93ta3tb3tc3td3te3tf3tg3th3ti3tj3yu3yv3yw3yx3yy3yz3z03z144f44g44h44i44j44k44l","FR":"479,103|3b93bb3bc3gs3gu3gv3gw3md3me3mf3mg3ry3rz3s03s13xh3xi3xj3xk3xl4324338ds8jb8jc8ow","JE":"468,94|3ba","CZ":"511,93|3bg3bh3bi","GG":"467,94|3gt","LU":"488,93|3gx","LI":"496,101|3gz","AT":"508,100|3h13h23mj3mk3ml","SK":"521,96|3h33h4","HU":"521,101|3h53mm3mn3mo","PM":"333,102|3ln","CH":"493,102|3mh3mi","RO":"535,105|3mp3mq3mr3s93sa3sb3sc3xt3xu","MD":"543,101|3ms","IT":"503,113|3s23s33s43xn43848s4ee4ph","SI":"509,104|3s5","HR":"514,107|3s63s743b","RS":"525,110|3s83xs43d","SM":"504,111|3xp","BA":"517,110|3xq3xr","BG":"536,115|3xv43e43f43g48y","UZ":"633,118|3ya3yb3yc43v43w43x43y43z49e49g49h49i49j49l4f24f34f44f54kn4ko","JP":"830,135|3zh4514524g64lq4ra4wt4wu52b52c52d52e57u57v5df","ES":"463,122|42y42z43043148j48k48l48m4e34e44e54jm4jn4jo4jp4p64p74p8","MC":"491,112|435","ME":"521,115|43c","GE":"583,117|43n43o498499","KG":"662,119|44444549m49n49o49p4f7","PT":"451,125|48h48i4e24jl","AD":"476,116|48n","VA":"504,118|48t","XK":"525,115|48w","MK":"527,119|48x","TR":"563,127|48z4924934974ek4el4em4en4eo4ep4eq4er4es4k44k54k64k74k84k94ka4kb4kc4po4pp4pq4pr4ps4pt4pu4pv4pw4vc","AZ":"594,123|49a4eu4ev","TM":"625,126|49d49f4ex4ey4ez4f04f14ki4kj4kk4kl4km4q54q64q74vq","KP":"797,123|4ae4af4fy4fz4li4lj","AL":"523,120|4eg","GR":"530,125|4eh4k04k1","AM":"587,123|4et","TJ":"655,128|4f64kp4kq4kr4q94qb","IR":"615,148|4kd4ke4px4py4pz4q24q34q44vh4vi4vj4vk4vl4vm4vn4vo4vp51251351451551651751851956m56n56o56p56q56r56s56t5c75c85c95ca5cb5cc5cd5hr5hs5ht5hu5hv5hw5hx5nd5ne5nf5ng5nh5ni5sx5sy5sz5t05t15t25yj5yl5ym5yn646","AF":"644,144|4q84qa4qc4vr4vs4vt4vu51a51b51c51d51e56u56v56w56x56y5ce5cf5cg5ch5ci5hy5hz5i0","KR":"804,135|4r44wo528","DZ":"478,162|4uu4uv4uw4ux50d50e50f50g50h50i55x55y55z5605615bh5bi5bj5bk5bl5bm5gz5h05h15h25h35h45h55h65mi5mj5mk5ml5mm5mn5mo5mp5mq5s15s25s35s45s55s65s75s85s95sa5xm5xn5xo5xp5xq5xr5xs5xt5xu63763863963a63b63c63d63e68s68t68u68v68w68x68y68z6ed6ee6ef6eg6eh6ei6jy6jz6k06k16k26pj6pk","TN":"496,143|4uy50j5625635bn","MT":"509,137|4v2","SY":"572,140|4vd4ve50x50y50z56h","IQ":"586,146|4vf4vg51051156i56j56k56l5c35c45c55c65ho5hp5hq5na","PK":"655,156|4vv4vw51f51g51h56z5705cj5ck5cl5i15i25i35i45nj5nk5nl5nm5nn5no5t35t45t55t65t75yo5yp5yq64764864964a64b","MA":"448,157|50b50c55t55u55v55w5bd5be5bf5bg5gw5gx5gy5mh5rz5s05xj63268m6e5","CY":"559,139|50v","IN":"686,179|51i5715725cm5cn5i55i65i75np5nq5nr5ns5t85t95ta5tb5tc5tj5tk5tl5yr5ys5yt5yu5yv5yw5yx5yy5yz5z15z25z35z464c64d64e64f64g64h64i64j64k64m64n64o69v69w69x69y69z6a06a16a26a36a46a56a76fg6fh6fi6fj6fk6fl6fm6fn6fo6fp6l06l26l36l46l56l66l76l86ql6qm6qn6qo6qp6qq6qr6qs6w66w76w86w96wa6wb71q71r71s71t71u77a77b77c77d7cu7cv7cw7cx7if7ig7ih7nz7o07tk7tl7z4","BM":"300,148|54z","LB":"565,143|56g","MX":"194,176|59s59t5fc5fe5ff5fg5fh5kx5ky5kz5l05l15l25l35qi5qj5qk5ql5qm5qn5w15w35w45w55w65w75w861l61n61o61p61q61r61s67667867967a67b67c6cs6ct6cu6cv6id6ie6if6ig6il6im6nw6nx6ny6nz6o06o46o56th6ti6tj6tk6tl6tn6to6z26z36z46z56z66z774o74p74q74r","LY":"519,166|5bo5bp5bt5bu5h75h85h95ha5hc5hd5he5mr5ms5mt5mu5mv5mw5mx5my5sb5sc5sd5se5sf5sg5sh5si5xv5xw5xx5xy5xz5y05y15y25y363f63g63h63i63j63k63l63m6906916926936946956966976en6eo6ep6eq6k96ka6kb6pu","IL":"564,151|5c1","JO":"568,152|5c25hk5hl","EG":"551,167|5hf5hg5hh5hi5mz5n05n15n25n45sj5sk5sl5sm5y45y55y65y763n63o63p63q63r69869969a69b69c6er6es6et6eu6ev6ew","PS":"564,150|5hj","SA":"591,175|5hm5hn5n55n65n75n85n95so5sp5sq5sr5ss5st5su5sv5ya5yb5yc5yd5ye5yf5yg63u63v63w63x63y63z64069f69g69h69i69j69k6ez6f06f16f26f36f46f56f66kj6kk6kl6km6kn6ko6kp6kq6kr6q46q56q66q76q86q96qa6vp6vq6vr6vs71a71b","KW":"597,158|5nb","NP":"695,162|5nt5nu5td5te5tf5z0","BT":"713,164|5th","EH":"437,175|5xk68n","MR":"442,188|5xl63363463563668o68p68q6e66e76e86e96jp6jq6jr6js6jt6ju6p96pa6pb6pc6pd6ut6uu6uv6uw6ux6uy70d70e70f70g70h75z760761762","BH":"606,169|5yh","MM":"733,185|5z55z664p6a86a96aa6fs6ft6fu6lc6ld6le6lf6lg6qw6qx6qy6wh6wi7217227d77is7tw","BS":"260,173|624","AE":"617,176|64369m69n","BD":"714,176|64l6a66fq6fr","ML":"460,197|68r6ea6eb6ec6jv6jw6jx6pe6pf6pg6ph6pi6uz6v06v16v26v370i70j70k70l70m70n7637647657667677bj7bk7bl7bm7bn7bo7h47h57h67h77mp7mq7s97sa","QA":"608,171|69l","OM":"623,186|69o6f76f86f96ks6kt6qb6qc6vu6vv6vw71e71f","TW":"797,176|6an","CU":"256,183|6d46d56d66ir6ob6oc","TC":"275,182|6da","NE":"495,197|6ej6ek6el6k36k46k56pl6pm6pn6po6pp6v46v56v66v76v86v96va70o70p70q70r70s70t76876976a76b76c76d7bq7br7bs7bt7bu7bv7bw7ha7hb7he7hf7hg","TD":"521,204|6em6k66k76k86pq6pr6ps6pt6vb6vc6vd6ve70u70v70w70x70y76e76f76g76h76i7bx7by7bz7c07c17hi7hj7hk7hl7n27n37n47n57sm7sn7so7sp7y57y67y77y883q83r","VN":"761,199|6fx6fy6li6lj6wn7ix7og7oh7u07zj","MO":"778,181|6g4","SD":"552,201|6kc6kd6ke6kf6kg6kh6pv6pw6px6py6pz6q06q16vf6vg6vh6vi6vj6vk6vl6vm70z71071171271371471576j76k76l76m76n76o76p7c27c37c47c57c67c77c87c97hm7hn7ho7hp7hq7hr7hs7ht7n67n77n87n97na7nc7sr7ss7st7su7sv7sw7ya","LA":"754,193|6lh6r06r16r26wl6wm72777s7db7dc","HK":"780,180|6lm","KY":"248,190|6oa","TH":"747,204|6qz6wj6wk72372472572677o77p77q77r7d87d97da7oc7zg8518al","BZ":"227,197|6tp","HT":"271,192|6ty","DO":"277,192|6tz6u0","PR":"288,194|6u2","VG":"293,193|6u3","AI":"297,194|6u4","YE":"600,201|6vt71971c71d76t76u76v76w76x76y7cd7ce7cf7cg7hy","GT":"222,202|6z874s7ab","JM":"258,194|6ze","KN":"298,197|6zl","MF":"297,194|6zm","BL":"298,195|6zn","SX":"297,195|6zo","ER":"577,203|71676q76r7ca7cb","PH":"803,201|72f72g7807j47j57oq7zt85e85f8ay8gg","VI":"293,196|756","DM":"301,203|757","AG":"301,198|758","CV":"405,204|75t","SN":"430,206|75x75y7bh7bi7h17h27h3","MP":"870,204|78e","HN":"232,205|7ac7ad7ae","NI":"235,211|7af7fy7fz7li","MS":"299,199|7aq","LC":"302,208|7ar","GM":"427,209|7bg","BF":"465,213|7bp7h87h97mr7ms7mt7mu7sb","GU":"868,209|7dw","SV":"225,208|7fx","VC":"301,210|7gc","NG":"492,222|7hc7hd7hh7mv7mw7mx7my7mz7n07sg7sh7si7sj7sk7xz7y07y17y27y37y483j83k83l83m83n83o8938948958968ep8eq","ET":"579,225|7hu7hv7hw7nd7ne7nf7ng7sx7sy7sz7t07yg7yh7yi7yj7yk7yl84084184284384484584684789l89m89n89o89p89q8f68f78f88f98fa8kq8kr","KH":"759,212|7iu7iv7iw7oe7of7tz","AW":"277,212|7lr","CW":"279,213|7ls","GD":"299,214|7lt","BB":"306,210|7lw","GW":"428,214|7ml","GN":"439,219|7mm7mn7mo7s67s77s87xr7xs","CM":"505,234|7n17sl83p8978988998er8es8et8kb8kc8kd8pv8pw8px8py","SS":"553,229|7nb7yb7yc7yd7ye7yf83w83x83y83z89g89h89i89j89k8f18f28f38f48km8kn","SO":"596,237|7nl7t37t47t57ym7yn7yo84884989r89s8fb8fc8kt8ku8kv8qd8qe8vw8vx91h970","CR":"237,221|7r37wn","CO":"267,240|7r87r97wr7ws82b82c82d87v87w87x87y8df8dg8dh8di8dj8iz8j08j18j28j38oj8ok8ol8om8on8u28u38u48u58u68zo8zp8zq95995a","VE":"286,230|7ra7rb7re7wt7wu7wv7ww7wx7wy7wz82e82f82g82h82i82j87z8808818828dk8dl8dm8dn8j48j58j68oo8op8u8","TT":"300,219|7rf","GH":"466,227|7sc7sd7xw7xx83g83h8908918ek","BJ":"476,222|7se7sf7xy892","CF":"526,232|7sq7y983s83t83u83v89a89b89c89d89e89f8eu8ev8ew8ex8ey8ez8f08ke8kf","DJ":"587,215|7t1","PA":"248,225|7wp82a","SL":"437,225|7xq83b","CI":"454,228|7xt7xu7xv83d83e83f88x88y88z8ei","GY":"306,237|82k8838848dp8j88ot","LR":"444,232|83c88v88w8eh","TG":"472,225|83i","LK":"693,228|84q8aa","MY":"788,241|8au8g68ge8gf8lp8lq8lw8ra8rb8rg8rh8wz","PW":"842,229|8b4","MH":"944,230|8bp","BR":"323,287|8do8j78oq8or8os8ox8u78u98ua8ub8uc8ud8ue8uf8ug8uh8zr8zs8zt8zu8zv8zw8zx8zy8zz90090295b95c95d95e95f95g95h95i95j95l95m95n9av9aw9ax9ay9az9b09b19b29b39b49b59b69b79b89b99ba9bb9gf9gg9gh9gi9gj9gk9gl9gm9gn9go9gp9gq9gr9gs9gt9gu9gv9lx9ly9lz9m09m19m29m39m49m59m69m79m89m99ma9mb9mc9md9me9mf9mg9mh9rh9ri9rj9rk9rl9rm9rn9ro9rp9rq9rr9rs9rt9ru9rv9rw9rx9ry9rz9s09s19x19x29x39x49x59x69x79x89x99xa9xb9xc9xd9xe9xf9xg9xh9xi9xj9xk9xl9xma2la2ma2na2oa2pa2qa2ra2sa2ta2ua2va2wa2xa2ya2za30a31a32a33a34a35a8aa8ba8ca8da8ea8fa8ga8ha8ia8ja8ka8la8ma8na8oaduadvadwadxadyadzae0ae1ae2ae3ae4ae5ae6ae7ae8ajgajhajiajjajkajlajmajnajoajpajqajrap0ap1ap2ap3ap4ap5ap6ap7ap8ap9apaapbaumaunauoaupauqaurausautauuauvauwb06b07b08b09b0ab0bb0cb0db0eb0fb5qb5rb5sb5tb5ub5vb5wb5xb5yb5zbbabbbbbcbbdbbebbfbbgbbhbbibbjbgvbgwbgxbgybgzbh0bh1bh2bh3bmfbmgbmhbmibmjbmkbs1bs2bs3bs4bxlbxmc35c36c37c8oc8pc8qc8rce8ce9ceacebcjscjtcpe","SR":"314,239|8dq8dr8j98ja8ou8ov","KE":"574,251|8f58ko8kp8ks8q98qa8qb8qc8vt8vu8vv91d91e91f91g96x96y96z9cj","ID":"786,253|8g38ln8lt8ly8r88r98ri8wr8ws8wt8wu8wy8x08x18x28x48x692d92e92j92k92l92m92o97x97y98398498598898c98f9di9dj9dk9dn9do9dp9ds9dt9dx9dz9e09e19e29e39j29j39jd9jj9jk9jl9jm9jn9oo9p49p69p79u89u99ua9ub9uc9uq9ur9zw9zxa02a0aa0ba5ja5m","FM":"908,231|8h1","CD":"535,262|8kg8kh8ki8kj8kk8kl8q08q18q28q38q48q58q68vj8vk8vl8vm8vn8vo8vp91491591691791891996n96o96p96q96r96s96t9c79c89c99ca9cb9cc9cd9hq9hr9hs9ht9hu9hv9hw9hx9n99na9nb9nc9nd9ne9nf9ng9nh9sv9sw9sx9sy9sz9t09t19yi9yj9yk9yl9yma42a43a44a9ma9na9oa9p","BN":"787,238|8lx","KI":"32,247|8na","CG":"512,255|8pz8vh8vi91291396l96m9c49c59c69ho9hp","UG":"559,249|8q78q88vq8vr8vs91a91b91c","MV":"673,239|8qu","EC":"252,257|8u18zf8zl8zm8zn9549559569aq9g9","ST":"488,252|8vc","GQ":"499,248|8vf","GA":"502,255|8vg90z91091196i96j96k","SG":"758,248|92f","NR":"933,254|93f","PE":"264,282|9579589ar9as9at9au9g89ga9gb9gc9gd9ge9lt9lu9lv9lw9rd9re9rf9rg9wy9wz9x0a2ia2ja2ka83a84a85a86adnadoadpadqaj8aj9ajaajbaosaotaouaueaufazy","TZ":"566,273|96u96w9cf9cg9ch9ci9hy9hz9i09i19i29ni9nj9nk9nl9nm9t29t39t49t59t69yn9yo9yp9yq9yra48a49a4aa9ta9ua9v","RW":"553,259|96v","BI":"552,263|9ce","PG":"869,274|9e49jo9jp9p89p99pa9pc9pd9us9ut9uua0ca0fa5z","SC":"623,268|9id","AO":"518,292|9st9su9yd9ye9yf9yg9yha3xa3ya3za40a41a9ia9ja9ka9laf1af2af3af4af5af6aklakmaknakoakpaq4aq5aq6aq7aq8aq9avoavpavqavravsavtb1cb1d","IO":"670,276|9tq","TL":"818,281|a04","ZM":"546,296|a45a46a47a9qa9raf7af8af9afaafbakqakraksaktakuakvaqaaqbaqcaqdavuavvavwavxb1f","SB":"913,284|a67","BO":"292,306|a87a88a89adradsadtajcajdajeajfaovaowaoxaoyaozaugauhauiaujaukaulazzb00b01b02b03b04b05b5kb5lb5mb5nb5ob5pbb4bb5bb6bb7bgpbgqbgr","MW":"564,295|a9sakwaqg","KM":"589,290|a9y","AU":"832,335|abgaguagvamdameamfamgamkaruarvarwarxaryarzas3as4axeaxfaxgaxhaxiaxjaxkaxlaxoaxpb2wb2xb2yb2zb30b31b32b33b34b35b36b37b38b8gb8hb8ib8jb8kb8lb8mb8nb8ob8pb8qb8rb8sb8tbdybdzbe0be1be2be3be4be5be6be7be8be9beabebbecbedbeebjgbjhbjibjjbjkbjlbjmbjnbjobjpbjqbjrbjsbjtbjubjvbjwbjxbjybozbp0bp1bp2bp3bp4bp5bp6bp7bp8bp9bpabpbbpcbpdbpebpfbpgbphbpibujbukbulbumbunbuobupbuqburbusbutbuubuvbuwbuxbuybuzbv0bv1bv2bv3c03c04c05c06c07c08c09c0ac0bc0cc0dc0ec0fc0gc0hc0ic0jc0kc0lc0mc0nc5nc5oc5pc5qc5rc5sc5tc5uc5vc5wc5xc5yc5zc60c61c62c63c64c65c66c67cb7cb8cb9cbacbbcbccbdcbecbfcbgcbhcbicbjcbkcblcbmcbncbocbpcbqcbrcgrcgscgtcgucgvcgwcgxcgycgzch0ch1ch2ch3ch4ch5ch6ch7ch8ch9chachbcmbcmccmdcmecmfcmgcmhcmicmjcmkcmlcmmcmncmocmpcmqcmrcmscmtcmucrvcrwcrxcrycrzcs0cs5cs6cs7cs8cs9csacsbcsccsdcsecxecxfcxgcxhcxicxpcxqcxrcxscxtcxucxvcxwd3bd3cd3dd3ed3fd3gd8ud8vd8wd8xd8yd8zdefdegdehdeidejdv4e0o","MZ":"567,308|afcafdafeaffakxakyakzaqeaqfaqhaqiaqjavzaw0aw1aw2aw3b1kb1lb74b75bcnbi7bi8bnrbnsbtbbtc","MG":"598,315|afkal5aqnaqoaw6aw7aw8b1qb1rb1sb7ab7bb7cbcubcvbiebifbnxbnybtibtj","WF":"970,299|an6","AS":"991,299|ana","VU":"928,302|asi","WS":"986,297|ast","SH":"454,304|avf","ZW":"551,314|avyb1gb1hb1ib1jb70b71b72b73bckbclbcmbi6","FJ":"957,310|ay8","NA":"517,324|b18b19b1ab1bb1eb6tb6ub6vb6wbcdbcebcfbcgbhybhzbi0bnhbnibnjbt2bt3bt4bymbync46c47c48c9qc9r","PF":"61,310|b4c","BW":"535,324|b6xb6yb6zbchbcibcjbi1bi2bi3bi4bi5bnkbnlbnmbnnbnobt5bt6bt7byp","MU":"627,318|b7h","NU":"989,314|b9i","CK":"36,321|b9q","CL":"285,364|bb3bgobm7bm8brsbxcc2wce0cuod08d5sdbcdgwdmhe8pe8qee9ejtejuepdeuzf0j","PY":"312,327|bb8bb9bgsbgtbgubmcbmdbmebrybrzbs0bxibxjc33","NC":"920,321|ben","TO":"973,321|bex","AR":"302,364|bm9bmabmbbrtbrubrvbrwbrxbxdbxebxfbxgbxhbxkc2xc2yc2zc30c31c32c34c8gc8hc8ic8jc8kc8lc8mc8nce1ce2ce3ce4ce5ce6ce7cjkcjlcjmcjncjocjpcjqcp5cp6cp7cp8cp9cpacupcuqcurcuscutcuud09d0ad0bd0cd0dd0ed0fd5td5ud5vd5wd5xd5yd5zdbddbedbfdbgdbhdbidbjdbkdgxdgydgzdh0dh1dmidmjdmkdmlds1ds2ds3ds4dxmdxndxodxpe36e37e38e8re8seeaeebeeceedejvejwejxepeepfepgev0f0lf66","ZA":"538,346|bnpbnqbt8bt9btabyobyqbyrbysbytc49c4ac4bc4cc4dc4ec4fc9sc9tc9uc9vc9wc9xc9ycfbcfccfdcfecffcfgcfickvckwckxckyckzcl0cl1cqgcqhcqicqjcqkcvzcw0cw1cw2","PN":"124,331|bqx","SZ":"555,338|byu","NF":"919,346|cc0","LS":"546,348|cfh","UY":"323,358|cjrcpbcpccpdcuvcuwcux","NZ":"902,394|d9cdexdeydkfdkgdkwdq0dvhe10e11e6ie6jec1ec2","TF":"643,411|elt","FK":"332,419|ev5","HM":"649,423|f2i","GS":"387,427|fc4"}};

  const TEXT = {
    en: { eyebrow: 'Our guests', title: n => `Guests from <b>${n}</b> countries have called Hancı home`,
          sub: 'The deeper the colour, the more guests we\'ve welcomed from there. Every booking adds a little more.', newest: 'Newest on the map', top: 'Most guests come from', fewer: 'fewer', moreG: 'more guests', home: 'Istanbul', more: n => `+${n} more`, less: 'Show less' },
    tr: { eyebrow: 'Misafirlerimiz', title: n => `<b>${n}</b> ülkeden misafirimiz Hancı'yı evi bildi`,
          sub: 'Renk koyulaştıkça o ülkeden gelen misafirimiz çoğalıyor. Her yeni rezervasyon haritaya işleniyor.', newest: 'Haritaya son eklenen', top: 'En çok misafir gelen ülkeler', fewer: 'az', moreG: 'çok misafir', home: 'İstanbul', more: n => `+${n} ülke daha`, less: 'Daha az göster' },
    ru: { eyebrow: 'Наши гости', title: n => `У нас уже жили гости из <b>${n}</b> ${n % 10 === 1 && n % 100 !== 11 ? 'страны' : 'стран'}`,
          sub: 'Чем насыщеннее цвет, тем больше гостей из этой страны. Каждое новое бронирование добавляет красок.', newest: 'Новое на карте', top: 'Чаще всего к нам приезжают', fewer: 'меньше', moreG: 'больше гостей', home: 'Стамбул', more: n => `ещё ${n}`, less: 'Свернуть' },
    ar: { eyebrow: 'ضيوفنا', title: n => `استقبلنا ضيوفًا من <b>${n}</b> ${n >= 3 && n <= 10 ? 'دول' : 'دولة'}`,
          sub: 'كلما كان اللون أعمق زاد عدد ضيوفنا من تلك الدولة، وكل حجز جديد يضيف لونًا.', newest: 'أحدث دولة على الخريطة', top: 'أكثر ضيوفنا من', fewer: 'أقل', moreG: 'ضيوف أكثر', home: 'إسطنبول', more: n => `+${n}`, less: 'عرض أقل' }
  };
  // ısı skalası: açık şeftali → koyu kiremit (5 kademe)
  const RAMP = ['#F6D3BC', '#F0B089', '#E68C62', '#D2653F', '#AC4026'];
  const chipLimit = () => (window.innerWidth < 760 ? 10 : 18);

  function decode(s) {
    const [a, list] = s.split('|');
    const cells = [];
    for (let i = 0; i < list.length; i += 3) cells.push(parseInt(list.substr(i, 3), 36));
    return { anchor: a ? a.split(',').map(Number) : null, cells };
  }
  function xy(i) {
    const r = Math.floor(i / MAP.cols), c = i % MAP.cols;
    return [c * MAP.step + MAP.step / 2 + (r % 2 ? MAP.step / 2 : 0), +(r * MAP.row + MAP.row / 2).toFixed(1)];
  }
  function countryName(code, lang) {
    try { const n = new Intl.DisplayNames([lang], { type: 'region' }).of(code); if (n && n !== code) return n; } catch (e) {}
    return code === 'XK' ? 'Kosovo' : code;
  }

  let cssDone = false;
  function injectCss() {
    if (cssDone) return; cssDone = true;
    const st = document.createElement('style');
    st.textContent = `
/* sayfadaki bölüm kutusu (index + stay: <section class="gmap-sec" id="guestMap">) */
.gmap-sec{padding:96px 56px;background:#fff}
.gmap{--gm-bg:#FBF5EC;--gm-land:#E6D9C3;--gm-ink:#3B2A1E;--gm-soft:#8A6F58;--gm-accent:#C8553D;
  background:var(--gm-bg);border-radius:32px;padding:56px 48px 44px;max-width:1180px;margin:0 auto;position:relative;overflow:hidden}
.gmap-head{text-align:center;max-width:680px;margin:0 auto 26px}
.gmap-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gm-accent)}
.gmap-eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--gm-accent);box-shadow:0 0 0 4px rgba(200,85,61,.15)}
.gmap-title{font-family:"Cormorant Garamond",serif;font-size:44px;line-height:1.12;font-weight:500;color:var(--gm-ink);letter-spacing:-.5px;margin-top:10px}
.gmap-title b{font-weight:600;color:var(--gm-accent)}
.gmap-sub{font-size:16px;color:var(--gm-soft);margin-top:10px}
.gmap-stage{position:relative}
.gmap svg{display:block;width:100%;height:auto;overflow:visible}
.gmap .gm-land{fill:var(--gm-land)}
.gmap .gm-c circle{transform-box:fill-box;transform-origin:center}
.gmap .gm-c{cursor:pointer}
.gmap.gm-anim .gm-c circle{transform:scale(0)}
.gmap.gm-in .gm-c circle{animation:gmPop .55s cubic-bezier(.34,1.56,.64,1) forwards;animation-delay:var(--d)}
.gmap .gm-c:hover circle,.gmap .gm-c.gm-on circle{filter:brightness(1.12)}
.gmap .gm-arc{fill:none;stroke:var(--gm-accent);stroke-linecap:round;opacity:var(--o,.26);stroke-dasharray:4 5}
.gmap .gm-arc.gm-on{opacity:.85;stroke-dasharray:none}
.gmap.gm-anim .gm-arc{opacity:0}
.gmap.gm-in .gm-arc{animation:gmArc 1s ease-out forwards;animation-delay:var(--d)}
.gmap:not(.gm-anim):not(.gm-in) .gm-newest circle{animation:gmTwinkle 2.4s ease-in-out infinite}
.gmap .gm-pulse{fill:var(--gm-accent);opacity:.25;transform-box:fill-box;transform-origin:center;animation:gmPulse 2.6s ease-out infinite}
.gmap .gm-home-label{font:700 13px "Plus Jakarta Sans",sans-serif;fill:var(--gm-ink);paint-order:stroke;stroke:var(--gm-bg);stroke-width:4px;stroke-linejoin:round}
.gmap-tip{position:absolute;pointer-events:none;background:#fff;color:var(--gm-ink);font-size:13px;font-weight:700;padding:7px 12px;border-radius:999px;
  box-shadow:0 6px 20px rgba(59,42,30,.16);transform:translate(-50%,-130%);white-space:nowrap;opacity:0;transition:opacity .15s}
.gmap-tip.on{opacity:1}
.gmap-tip i{display:inline-block;width:8px;height:8px;border-radius:50%;margin-inline-end:7px;vertical-align:1px}
.gmap-foot{display:flex;flex-direction:column;align-items:center;gap:16px;margin-top:22px}
.gmap-pills{display:flex;flex-wrap:wrap;justify-content:center;gap:10px}
.gmap-legend{position:absolute;inset-inline-start:2%;bottom:4%;display:flex;align-items:center;gap:4px;font-size:12px;font-weight:600;color:var(--gm-soft);background:rgba(251,245,236,.85);padding:6px 10px;border-radius:999px}
.gmap-legend i{width:11px;height:11px;border-radius:50%}
.gmap-legend span{margin:0 4px}
.gmap-newest .gm-heart{background:#FBE3DC}
.gmap-newest{display:inline-flex;align-items:center;gap:10px;background:#fff;border-radius:999px;padding:8px 16px 8px 10px;font-size:14px;color:var(--gm-soft);box-shadow:0 4px 14px rgba(59,42,30,.07)}
.gmap-newest b{color:var(--gm-ink)}
.gmap-newest .gm-star{flex:none;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:#FDEBD9;color:var(--gm-accent)}
.gmap-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:7px;max-width:900px}
.gmap-chip{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.75);border:1px solid #EFE3D1;border-radius:999px;padding:5px 12px;font-size:13px;font-weight:600;color:var(--gm-ink);cursor:default;transition:background .15s,transform .15s}
.gmap-chip:hover,.gmap-chip.gm-on{background:#fff;transform:translateY(-1px)}
.gmap-chip i{width:8px;height:8px;border-radius:50%}
.gmap-more{background:none;border:0;font:700 13px "Plus Jakarta Sans",sans-serif;color:var(--gm-accent);cursor:pointer;padding:5px 8px}
@keyframes gmPop{from{transform:scale(0)}to{transform:scale(1)}}
@keyframes gmTwinkle{0%,100%{transform:scale(1)}50%{transform:scale(1.35)}}
@keyframes gmPulse{0%{transform:scale(.6);opacity:.45}100%{transform:scale(2.6);opacity:0}}
@keyframes gmArc{from{opacity:0}to{opacity:var(--o,.26)}}
@media (max-width:760px){
  .gmap-sec{padding:56px 16px}
  .gmap{border-radius:24px;padding:36px 16px 28px}
  .gmap-title{font-size:31px}
  .gmap-sub{font-size:14px}
  .gmap-legend{position:static;justify-content:center;margin-top:10px;background:none}
  .gmap-newest{font-size:13px}
  .gmap .gm-home{transform:scale(1.9)}
  .gmap .gm-home-label{font-size:14px}
}
@media (prefers-reduced-motion:reduce){
  .gmap.gm-anim .gm-c circle,.gmap.gm-anim .gm-arc{transform:none;opacity:inherit}
  .gmap .gm-c circle,.gmap .gm-arc,.gmap .gm-pulse,.gmap .gm-newest circle{animation:none!important}
}`;
    document.head.appendChild(st);
  }

  window.renderGuestMap = function (el, lang, codes) {
    if (!el || !MAP) return;
    injectCss();
    const t = TEXT[lang] || TEXT.en;
    const count = {}, list = [];
    (codes || []).forEach(x => {
      const c = String(Array.isArray(x) ? x[0] : x).trim().toUpperCase();
      const n = Array.isArray(x) ? Math.max(1, parseInt(x[1], 10) || 1) : 1;
      if (!MAP.c[c]) return;
      if (count[c]) count[c] += n; else { count[c] = n; list.push(c); }
    });
    if (!list.length) { el.innerHTML = ''; return; }
    const newest = list[list.length - 1];
    const max = Math.max(...list.map(c => count[c]));
    const level = {}, color = {};
    list.forEach(c => {
      level[c] = max > 1 ? Math.round(4 * Math.log(count[c]) / Math.log(max)) : 2;
      color[c] = RAMP[level[c]];
    });
    const byCount = list.slice().sort((a, b) => count[b] - count[a] || countryName(a, lang).localeCompare(countryName(b, lang), lang));
    const order = {}; list.forEach((c, i) => { order[c] = i; });
    const r = +(MAP.step * 0.34).toFixed(2), rOn = +(MAP.step * 0.42).toFixed(2);
    const [hx, hy] = MAP.ist;

    let land = '', on = '', arcs = '';
    for (const code in MAP.c) {
      const d = decode(MAP.c[code]);
      if (color[code]) {
        const delay = (0.15 + order[code] * (1.6 / list.length)).toFixed(2) + 's';
        on += `<g class="gm-c${code === newest ? ' gm-newest' : ''}" data-c="${code}" style="--d:${delay}">` +
          d.cells.map(i => { const p = xy(i); return `<circle cx="${p[0]}" cy="${p[1]}" r="${rOn}" fill="${color[code]}"/>`; }).join('') + '</g>';
        if (d.anchor && code !== 'TR') {
          const [ax, ay] = d.anchor;
          const dist = Math.hypot(hx - ax, hy - ay);
          const mx = (ax + hx) / 2, my = (ay + hy) / 2 - Math.min(140, dist * 0.32);
          arcs += `<path class="gm-arc" data-c="${code}" style="--d:${delay};--o:${(0.14 + level[code] * 0.07).toFixed(2)};stroke-width:${(1 + level[code] * 0.3).toFixed(1)}" d="M${ax},${ay} Q${mx.toFixed(0)},${my.toFixed(0)} ${hx},${hy}"/>`;
        }
      } else {
        land += d.cells.map(i => { const p = xy(i); return `M${(p[0] - r).toFixed(1)} ${p[1]}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`; }).join('');
      }
    }
    // İstanbul: kalpli yuvarlak işaret
    const home = `<g transform="translate(${hx},${hy})"><g class="gm-home">
      <circle class="gm-pulse" r="12"/>
      <circle r="11" fill="#fff" stroke="var(--gm-accent)" stroke-width="2.5"/>
      <path transform="translate(-6.5,-6) scale(.54)" fill="var(--gm-accent)" d="M12 21.6 10.6 20.3C5.4 15.6 2 12.5 2 8.6 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1C13.1 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.6c0 3.9-3.4 7-8.6 11.7z"/>
      <text class="gm-home-label" x="16" y="-12">${t.home}</text></g></g>`;

    const sorted = byCount;
    let topNames = byCount.slice(0, 3).map(c => countryName(c, lang));
    try { topNames = new Intl.ListFormat(lang, { type: 'conjunction' }).format(topNames); } catch (e) { topNames = topNames.join(', '); }
    const showTop = max > 1;
    const heart = '<path d="M12 21.6 10.6 20.3C5.4 15.6 2 12.5 2 8.6 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1C13.1 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.6c0 3.9-3.4 7-8.6 11.7z"/>';
    const legend = showTop ? `<div class="gmap-legend"><span>${t.fewer}</span>${RAMP.map(c => `<i style="background:${c}"></i>`).join('')}<span>${t.moreG}</span></div>` : '';
    const topPill = showTop ? `<div class="gmap-newest"><span class="gm-star gm-heart"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">${heart}</svg></span>${t.top}: <b>${topNames}</b></div>` : '';
    const chip = c => `<span class="gmap-chip" data-c="${c}"><i style="background:${color[c]}"></i>${countryName(c, lang)}</span>`;
    const CHIP_LIMIT = chipLimit(), extra = sorted.length - CHIP_LIMIT;

    el.innerHTML = `<div class="gmap gm-anim">
      <div class="gmap-head">
        <div class="gmap-eyebrow"><i></i>${t.eyebrow}</div>
        <h2 class="gmap-title">${t.title(list.length)}</h2>
        <p class="gmap-sub">${t.sub}</p>
      </div>
      <div class="gmap-stage">
        <svg viewBox="0 0 ${MAP.w} ${MAP.h}" role="img" aria-label="${t.title(list.length).replace(/<[^>]+>/g, '')}">
          <path class="gm-land" d="${land}"/>${on}<g class="gm-arcs">${arcs}</g>${home}
        </svg>
        <div class="gmap-tip"></div>
        ${legend}
      </div>
      <div class="gmap-foot">
        <div class="gmap-pills">${topPill}<div class="gmap-newest"><span class="gm-star"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7.3L12 17.8 5.8 21.5l1.6-7.3L2 9.5l7.1-.6z"/></svg></span>${t.newest}: <b>${countryName(newest, lang)}</b></div></div>
        <div class="gmap-chips">${sorted.slice(0, CHIP_LIMIT).map(chip).join('')}${extra > 0 ? `<span class="gm-rest" hidden>${sorted.slice(CHIP_LIMIT).map(chip).join('')}</span><button class="gmap-more" type="button">${t.more(extra)}</button>` : ''}</div>
      </div>
    </div>`;

    const box = el.querySelector('.gmap'), svg = box.querySelector('svg'), tip = box.querySelector('.gmap-tip'), stage = box.querySelector('.gmap-stage');
    const more = box.querySelector('.gmap-more');
    if (more) more.onclick = () => {
      const rest = box.querySelector('.gm-rest'), open = rest.hidden;
      rest.hidden = !open; rest.style.display = open ? 'contents' : '';
      more.textContent = open ? t.less : t.more(extra);
    };

    function light(code, on, evt) {
      box.querySelectorAll(`[data-c="${code}"]`).forEach(n => n.classList.toggle('gm-on', on));
      if (on) {
        tip.innerHTML = `<i style="background:${color[code]}"></i>${countryName(code, lang)}`;
        const s = stage.getBoundingClientRect();
        let x, y;
        if (evt && evt.clientX) { x = evt.clientX - s.left; y = evt.clientY - s.top; }
        else { const d = decode(MAP.c[code]); const p = d.anchor || xy(d.cells[0]); x = p[0] / MAP.w * s.width; y = p[1] / MAP.h * s.height; }
        tip.style.left = Math.max(60, Math.min(s.width - 60, x)) + 'px'; tip.style.top = y + 'px';
      }
      tip.classList.toggle('on', on);
    }
    let active = null;
    const pick = e => { const g = e.target.closest('[data-c]'); return g ? g.getAttribute('data-c') : null; };
    box.addEventListener('pointerover', e => { const c = pick(e); if (c && c !== active) { if (active) light(active, false); active = c; light(c, true, e.target.closest('svg') ? e : null); } });
    box.addEventListener('pointermove', e => { if (active && e.target.closest('svg')) light(active, true, e); });
    box.addEventListener('pointerout', e => { const c = pick(e); if (c && c === active && !(e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(`[data-c="${c}"]`))) { light(c, false); active = null; } });

    // görünür olunca noktalar sırayla belirsin
    const start = () => { box.classList.add('gm-in'); setTimeout(() => box.classList.remove('gm-anim', 'gm-in'), 3200); };
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { box.classList.remove('gm-anim'); return; }
    const io = new IntersectionObserver(es => { if (es.some(x => x.isIntersecting)) { io.disconnect(); start(); } }, { threshold: 0.25 });
    io.observe(svg);
  };
})();
