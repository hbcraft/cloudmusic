__define__('0', {
  303 : [['29', '70'],
  function() {
    const lw = NEJ.P;
    const hh = lw('nej.e');
    const I = lw('nej.v');
    const bj = lw('nm.x');
    const uo = lw('nm.l');
    let bb;
    let Dg;
    uo.cxU = NEJ.C();
    bb = uo.cxU.bm(uo.bkb);
    bb.cZ = function() {
      this.hR = 'z-show';
      this.cT = 'm-xwdt-confirm-versignfail'
    };
    bb.cK = function() {
      this.cP();
      I.bs(this.bmx, 'click', this.dO.mb(this))
    };
    bb.dO = function(il) {
      const Y = I.cA(il, 'c:j-link');
      if (Y) {
        bj.R$openUrl(APP_CONF.domain + '/download')
      }
    }
  }],
  305 : [['94'],
  function() {
    const lw = NEJ.P;
    const bh = NEJ.O;
    const bM = NEJ.F;
    const hh = lw('nej.e');
    const I = lw('nej.v');
    const oe = lw('nej.u');
    const bw = lw('nej.n');
    const bq = lw('nej.ut');
    const bj = lw('nm.x');
    const rh = lw('nm.c');
    let bb;
    if (rh.ccS) return;
    rh.ccS = NEJ.C();
    bb = rh.ccS.bm(rh.bjd);
    bb.dS = function() {
      this.dY();
      bw.R$call('musicsubsciber.subsicbers', this.dcM.mb(this));
      bw.VG('Connect', 'musicsubsciber', this.dcN.mb(this));
      bw.VG('DisConnect', 'musicsubsciber', this.dcO.mb(this));
      this.bAY = {}
    };
    bb.bU = function(fr) {
      this.bY(fr)
    };
    bb.cq = function() {
      this.NY()
    };
    bb.dcN = function(btB, km) {
      if (km > 0) {
        this.bLF = true
      } else {
        this.bLF = false
      }
      this.dcR(btB)
    };
    bb.dcO = function(btB, km) {
      if (km > 0) {
        this.bLF = true
      } else {
        this.bLF = false
      }
    };
    bb.dcM = function(jV) {
      if (jV && jV.length > 0) {
        this.bLF = true;
        nm.log.Du('sysaction', {
          type: 'musicsubsciber',
          target: 'subsicberCount',
          ids: JSON.stringify(jV)
        })
      } else {
        this.bLF = false
      }
    };
    bb.cSm = function(jV) {
      if (jV && jV.length) {
        const bUk = this.bAY.playlist;
        try {
          if (bUk && JSON.stringify(bUk.songIds) == JSON.stringify(jV)) {
            return
          }
        } catch(e) {}
        this.biw('playlist', {
          songIds: jV
        })
      } else {
        this.bPn()
      }
    };
    bb.dcf = function(be, gl) {
      gl = Object.assign({
        songid: be
      },
      gl);
      this.bdN = be;
      this.biw('playmusic', gl)
    };
    bb.bUp = function(be, bjX) {
      const bUk = this.bAY.playlyric;
      try {
        if (bUk && JSON.stringify(bUk.lyric) == JSON.stringify(bjX)) {
          return
        }
      } catch(e) {}
      this.biw('playlyric', {
        songid: be || this.bdN,
        lyric: bjX
      })
    };
    bb.ddi = function(be, gl) {
      gl = Object.assign({
        songid: be
      },
      gl);
      this.biw('playduration', gl)
    };
    bb.bPn = function() {
      this.biw('playstop');
      this.bAY = {}
    };
    bb.biw = function(bn, eJ, btB) {
      if (this.bLF) {
        bw.R$call('musicsubsciber.notify', btB || '', 1, bn, eJ ? JSON.stringify(eJ) : '')
      }
      this.bAY[bn] = eJ
    };
    bb.dcR = function(btB) { ['playlist', 'playmusic', 'playlyric', 'playduration'].forEach(function(ba) {
        if (this.bAY[ba]) {
          if (this.bAY[ba].songid !== undefined && this.bAY[ba].songid !== this.bdN) {
            return
          }
          this.biw(ba, this.bAY[ba], btB)
        }
      },
      this)
    };
    bq.gz.bg({
      element: rh.ccS,
      event: []
    });
    lw('ctl').musicsubsciber = rh.ccS.ta()
  }],
  306 : [['314', '290', '300', '84', '123', '115', '29'],
  function() {
    const lw = NEJ.P;
    const bh = NEJ.O;
    const bM = NEJ.F;
    const hh = lw('nej.e');
    const I = lw('nej.v');
    const oe = lw('nej.u');
    const bw = lw('nej.cef');
    const bq = lw('nej.ut');
    const rh = lw('nm.c');
    const bj = lw('nm.x');
    let bb;
    if (rh.ces) return;
    rh.ces = NEJ.C();
    bb = rh.ces.bm(rh.bso);
    bb.dS = function() {
      this.ov = {
        type: 'miniplayercontextmenu',
        conf: {
          content: [bw.dq({
            text: '总在最前面',
            menu_id: 200
          }), bw.dq({
            text: '完整模式',
            menu_id: 201,
            image_path: bj.eY('icn_normal')
          }), bw.dq({
            text: '列表循环',
            menu_id: 205,
            children: [bw.dq({
              text: '心动模式',
              menu_id: 1044,
              image_path: bj.eY('icn_ai')
            }), bw.dq({
              text: '列表循环',
              menu_id: 1040,
              image_path: bj.eY('icn_loop')
            }), bw.dq({
              text: '单曲循环',
              menu_id: 1041,
              image_path: bj.eY('icn_repeat')
            }), bw.dq({
              text: '随机播放',
              menu_id: 1042,
              image_path: bj.eY('icn_shuffle')
            }), bw.dq({
              text: '顺序播放',
              menu_id: 1043,
              image_path: bj.eY('icn_order')
            })],
            image_path: bj.eY('icn_loop')
          }), bw.dq({
            text: '打开桌面歌词',
            menu_id: 203,
            image_path: bj.eY('icn_openLrc')
          }), bw.dq({
            text: '锁定桌面歌词',
            menu_id: 204,
            image_path: bj.eY('icn_lock')
          }), bw.dq({
            text: '词、曲报错',
            menu_id: 202,
            image_path: bj.eY('icn_words')
          }), bw.dq({
            text: '退出',
            menu_id: 206,
            image_path: bj.eY('icn_exit')
          })],
          hotkey: {
            200 : 'Ctrl F'
          },
          resource: function() {
            return {}
          },
          check: function() {
            const Yz = bw.gk(200);
            const tW = dc.setting.HB().minitop; ! tW ? delete Yz.image_path: Yz.image_path = bj.eY('icn_checked');
            const tD = dc.track.bhQ() || bh;
            const dcV = dc.track.bPi(tD.data);
            const dcW = dc.track.dps(tD.data);
            if (tD && tD.state && tD.state == 2 && !dcV && !dcW) {
              bw.gk(202).menu = !0
            } else {
              bw.gk(202).menu = !1
            } (bw.gk(201) || {}).text = '完整模式';
            const Yt = ctl.hotkey.dcU();
            if (Yt) {
              for (let i = 0, l = Yt.length; i < l; i++) {
                var W = Yt[i];
                if (W.name == 'mini_max') {
                  if (W.notconflict && W.val) { (bw.gk(201) || {}).text = '完整模式（' + W.val + '）'
                  }
                  break
                }
              }
            }
            const cer = localCache.bR('desktop_lyric_close');
            const cxD = localCache.bR('desktop_lyric_lock');
            const can = localCache.bR('show_lyric_type');
            const bmf = bw.gk(203);
            const bwy = bw.gk(204);
            if (can != 0) {
              bmf.menu = !0;
              bmf.text = '启用桌面歌词';
              bwy.menu = !1
            } else {
              bmf.text = cer ? '打开桌面歌词': '关闭桌面歌词';
              bmf.image_path = bj.eY(cer ? 'icn_openLrc': 'icn_closeLrc');
              bwy.menu = !cer;
              bwy.text = cxD ? '解锁桌面歌词': '锁定桌面歌词';
              bwy.image_path = bj.eY(cxD ? 'icn_unlock': 'icn_lock')
            }
            var W = bw.gk(205);
            if (ctl.defPlayer.bjr()) {
              W.menu = !0;
              const ddb = ctl.defPlayer.dcd();
              oe.AF(W.children,
              function(bHv) {
                if (bHv.menu_id == ddb) {
                  bHv.check_image_path = bj.eY('icn_checked');
                  W.text = bHv.text;
                  W.image_path = bHv.image_path
                } else {
                  delete bHv.check_image_path
                }
                if (bHv.menu_id == 1044) {
                  bHv.menu = dc.setting.cHn()
                }
              })
            } else {
              W.menu = !1
            }
          },
          handler: function(be, G, da) {
            switch (be) {
            case 200:
              var tW = !dc.setting.HB().minitop;
              bw.R$exec('player.setAlwaysOnTop', !!tW);
              var Cw = dc.setting.HB();
              Cw.minitop = !!tW;
              dc.setting.us(Cw);
              break;
            case 202:
              I.bk(document, 'menuaction', {
                id: 1053
              });
              var tD = dc.track.bhQ();
              if (!tD) return;
              var bu = tD.data;
              if (bu.filename) return;
              rh.bwI.ta().cBJ();
              break
            }
          }
        }
      };
      this.dY();
      bw.VG('contextmenu', 'player', this.ddd.mb(this));
      bw.VG('shortcut', 'player', this.clw.mb(this), 2)
    };
    bb.ddd = function() {
      I.bk(document, 'contextmenu', {
        res: {
          id: 'rand-id',
          type: this.ov.type,
          menu: 'true'
        }
      })
    };
    bb.clw = function(il) {
      if (il.id == 200) {
        this.ov.conf.handler(200)
      }
    };
    lw('ctl').miniPlayerContextMenu = rh.ces.ta()
  }],
  307 : [['314', '113', '29'],
  function() {
    const lw = NEJ.P;
    const bh = NEJ.O;
    const bM = NEJ.F;
    const hh = lw('nej.e');
    const I = lw('nej.v');
    const oe = lw('nej.u');
    const bw = lw('nej.cef');
    const bq = lw('nej.ut');
    const rh = lw('nm.c');
    const bj = lw('nm.x');
    let bb;
    if (rh.ceo) return;
    rh.ceo = NEJ.C();
    bb = rh.ceo.bm(rh.bso);
    bb.dS = function() {
      this.ov = {
        type: 5,
        conf: {
          content: [bw.dq({
            menu_id: 50001,
            text: '查看用户',
            image_path: bj.eY('icn_lookfor')
          }), bw.dq({
            separator: !0,
            enable: !1
          }), bw.dq({
            menu_id: 50002,
            text: '复制链接',
            image_path: bj.eY('icn_link')
          })],
          resource: function(be) {
            return dc.user.cB(be)
          },
          check: function(G, jA) {
            const oz = !navigator.offline && jA.fid == 7;
            bw.gk(50001).menu = oz;
            bw.gk(50002).menu = oz
          },
          handler: function(be, G, da) {
            switch (be) {
            case 50001:
              location.hash = '/m/personal/?uid=' + G.userId;
              break;
            case 50002:
              bj.boX(5, G.userId);
              break
            }
          }
        }
      };
      this.dY()
    };
    lw('ctl').userContextMenu = rh.ceo.ta()
  }],
  308 : [['314', '113', '115', '29', '277', '130'],
  function() {
    const lw = NEJ.P;
    const bh = NEJ.O;
    const bM = NEJ.F;
    const hh = lw('nej.e');
    const I = lw('nej.v');
    const oe = lw('nej.u');
    const bw = lw('nej.cef');
    const bq = lw('nej.ut');
    const rh = lw('nm.c');
    const bj = lw('nm.x');
    const oM = lw('nm.d');
    const uo = lw('nm.l');
    let bb;
    if (rh.cen) return;
    rh.cen = NEJ.C();
    bb = rh.cen.bm(rh.bso);
    bb.dS = function() {
      this.mM = oM.ju.bg({
        onitemload: this.bes.mb(this, 6)
      });
      this.ov = {
        type: 6,
        conf: {
          content: [bw.dq({
            menu_id: 60001,
            text: '查看歌手',
            image_path: bj.eY('icn_lookfor')
          }), bw.dq({
            separator: !0,
            enable: !1
          }), bw.dq({
            menu_id: 60003,
            text: '收藏...',
            image_path: bj.eY('icn_addlist')
          }), bw.dq({
            menu_id: 60002,
            text: '复制链接',
            image_path: bj.eY('icn_link')
          }), bw.dq({
            separator: !0,
            enable: !1
          }), bw.dq({
            menu_id: 60004,
            text: '删除歌手',
            image_path: bj.eY('icn_delete')
          }), bw.dq({
            menu_id: 60007,
            text: '不感兴趣'
          })],
          hotkey: {
            60003 : 'Ctrl S',
            60004 : 'Delete'
          },
          resource: function(be) {
            return dc.artist.cB(be)
          },
          loadres: function(be) {
            this.mM.hx({
              id: be,
              key: 'artist',
              ext: 6
            })
          }.mb(this),
          check: function(G, fr) {
            const bxJ = dc.artist.dgU(G);
            const ckq = fr.fid == -14;
            const ddf = fr.fid == -18 && !bxJ;
            const cdd = !!G.artistTopId;
            const bjA = !navigator.offline;
            bw.gk(60001).enable = bjA;
            bw.gk(60003).menu = !cdd && !bxJ;
            bw.gk(60003).enable = bjA;
            bw.gk(60002).menu = !cdd;
            bw.gk(60004).menu = ckq && bxJ;
            bw.gk(60004).enable = bjA;
            bw.gk(60007).menu = ddf
          },
          handler: function(be, cF, jA, bdY) {
            switch (be) {
            case 60001:
              var cdd = !!cF.artistTopId;
              if (cdd) {
                location.hash = '#/m/disc/artists?type=' + cF.artistTopId
              } else {
                location.hash = '#/m/artist/?id=' + cF.id
              }
              break;
            case 60002:
              bj.boX(6, cF.id);
              break;
            case 60003:
              var bQ = localCache.ce('host.profile.userId');
              this.mM.hG({
                key: 'artist_sub-' + bQ,
                data: cF,
                extRefreshKey: 'artist_recommend-' + bQ,
                extFrom: jA.fid
              });
              break;
            case 60004:
              ctl.layer.bQy(uo.bma.bg({
                message:
                '确定要取消收藏该歌手？',
                data: {
                  rdata: cF,
                  type: 6
                },
                onok: this.bwK.mb(this, cF),
                okText: '确定',
                title: '取消收藏'
              }).cj());
              break;
            case 60007:
              var bQ = localCache.ce('host.profile.userId');
              this.mM.kf({
                key: 'artist_recommend-' + bQ,
                id: cF.id,
                data: {
                  artistIds: [cF.id]
                }
              });
              break
            }
          }.mb(this)
        },
        action: {
          play: {
            6 : function(cF, jA) {
              dc.track.biN(dc.track.cS('track_artist_top-' + jA.data), jA, {
                play: !0,
                clear: !0
              })
            }.mb(this)
          },
          fav: {
            6 : 600003
          },
          favart: {
            6 : 60003
          },
          unfavart: {
            6 : 60004
          }
        },
        ddtip: {
          6 : function(vc) {
            return vc.name
          }
        }
      };
      this.dY()
    };
    bb.bwK = function(G) {
      const bQ = localCache.ce('host.profile.userId');
      this.mM.kf({
        ext: G,
        id: G.id,
        data: G,
        key: 'artist_sub-' + bQ,
        extRefreshKey: 'artist_recommend-' + bQ
      })
    };
    lw('ctl').artistContextMenu = rh.cen.ta()
  }],
  309 : [['314', '164', '193', '29'],
  function() {
    const lw = NEJ.P;
    const bh = NEJ.O;
    const bM = NEJ.F;
    const hh = lw('nej.e');
    const I = lw('nej.v');
    const oe = lw('nej.u');
    const bw = lw('nej.cef');
    const bq = lw('nej.ut');
    const uo = lw('nm.l');
    const oM = lw('nm.d');
    const rh = lw('nm.c');
    const bj = lw('nm.x');
    let bb;
    if (rh.cel) return;
    rh.cel = NEJ.C();
    bb = rh.cel.bm(rh.bso);
    bb.dS = function() {
      var fw = this.ov = {
        type: 2,
        conf: {
          content: [bw.dq({
            menu_id: 2e4,
            text: '查看专辑',
            image_path: bj.eY('icn_lookfor')
          }), bw.dq({
            menu_id: 20001,
            text: '播放',
            image_path: bj.eY('icn_play')
          }), bw.dq({
            menu_id: 20005,
            text: '下一首播放',
            image_path: bj.eY('icn_addto')
          }), bw.dq({
            separator: !0,
            enable: !1
          }), bw.dq({
            menu_id: 20002,
            text: '收藏',
            image_path: bj.eY('icn_addlist')
          }), bw.dq({
            menu_id: 20003,
            text: '分享...',
            image_path: bj.eY('icn_share')
          }), bw.dq({
            menu_id: 20017,
            text: '复制链接',
            image_path: bj.eY('icn_link')
          }), bw.dq({
            menu_id: 20004,
            text: '下载全部',
            image_path: bj.eY('icn_download')
          }), bw.dq({
            separator: !0,
            enable: !1
          }), bw.dq({
            menu_id: 20007,
            text: '删除专辑',
            image_path: bj.eY('icn_delete')
          })],
          hotkey: {
            20001 : 'Enter',
            20002 : 'Ctrl S',
            20004 : 'L',
            20007 : 'Delete'
          },
          resource: function(be) {
            return this.fd.cB(be)
          },
          loadres: function(be) {
            this.fd.hx({
              id: be,
              key: 'album',
              ext: 2
            })
          },
          check: (function() {
            const ddg = function(G, da) {
              return da.fid != '-14' && (typeof G.isSub === 'undefined' || !G.isSub) && (typeof G.info === 'undefined' || typeof G.info.isSub === 'undefined' || !G.info.isSub)
            };
            const ddh = function(G, da) {
              return da.fid == '-14'
            };
            return function(G, da) {
              bw.gk(20003).enable = !this.fd.bqV(G.id || G);
              bw.gk(20002).menu = !!ddg(G, da);
              bw.gk(20007).menu = !!ddh(G, da)
            }
          } ()),
          handler: function(be, cF, jA, bdY) {
            switch (be) {
            case 20002:
              if (bj.Qy()) return bj.bkZ('album_sub-add');
              var bQ = localCache.ce('host.profile.userId');
              this.fd.hG({
                key: 'album_sub-' + bQ,
                data: cF
              });
              break;
            case 20006:
              var bgo = (this.fd.dkC(cF.id) || 0) > 0;
              ctl.layer.bQy(uo.bma.bg({
                title: '取消收藏',
                message: '确定不再收藏该专辑？',
                okText: '确定',
                checkable: bgo,
                onok: this.bwK.mb(this, cF)
              }).cj());
              break;
            case 20007:
              ctl.layer.bQy(uo.bma.bg({
                title:
                '删除',
                message: '确定删除该专辑？',
                okText: '删除',
                onok: this.bwK.mb(this, cF)
              }).cj());
              break;
            case 20004:
              if (bj.Qy()) return bj.bkZ('album_offline');
              var bQ = localCache.ce('host.profile.userId');
              if (!cF.isSub && (!cF.info || !cF.info.isSub) && jA.fid != '-14') {
                this.fd.hG({
                  key: 'album_sub-' + bQ,
                  data: cF,
                  ext: {
                    autoSub: true
                  }
                })
              }
              this.bH.ej({
                key: 'track_album-' + cF.id,
                data: {
                  id: cF.id
                },
                ext: {
                  id: cF.id,
                  action: 'offline'
                }
              });
              break;
            case 20017:
              bj.boX(2, cF.id)
            }
          }.mb(this)
        },
        text: {
          2 : function(be, cF, dKQ) {
            let W = this.fd.cB(be);
            if (!W) {
              W = (cF.track || cF).album || bh
            }
            return {
              text: W.name || '',
              href: bj.hi(fw.link['20000'], W)
            }
          }
        },
        link: {
          2e4: '/m/album/?id={id}&rid={commentThreadId}'
        },
        play: {
          20001 : function(cF, jA, bdY) {
            let cek = {};
            if (jA && jA.fid == 4) {
              NEJ.X(cek, jA)
            } else {
              cek = {
                fid: 2,
                href: '/m/album/?id={id}&rid={commentThreadId}'
              }
            }
            return {
              key: 'track_album-{id}',
              from: cek,
              count: function(be) {
                this.fd.bgr(be)
              },
              confirm: jA.location == 'detail'
            }
          }
        },
        queue: {
          20005 : 20001
        },
        share: {
          20003 : 'album'
        },
        albumlog: {
          20001 : 'play',
          20002 : 'subscribe',
          20003 : 'share'
        },
        ddtip: {
          2 : function(bin) {
            return bin.name
          }
        },
        action: {
          link: {
            2 : 2e4
          },
          play: {
            2 : 20001
          },
          queue: {
            2 : 20005
          },
          fav: {
            2 : 20002
          },
          unfav: {
            2 : 20006
          },
          share: {
            2 : 20003
          },
          download: {
            2 : 20004
          }
        }
      };
      this.dY()
    };
    bb.bU = function(fr) {
      this.bY(fr);
      if (this.fd) this.fd.bp();
      this.fd = oM.blc.bg({
        onitemload: this.bes.mb(this, 2)
      });
      if (this.bH) this.bH.bp();
      this.bH = oM.cg.bg({
        onlistload: this.Pl.mb(this)
      })
    };
    bb.bes = function(Z, fr) {
      ctl.actionManager.cIQ(Z, fr)
    };
    bb.Pl = function(fr) {
      const CH = fr.ext || bh;
      const D = this.bH.cS(fr.key);
      if (!D.length) return;
      switch (CH.action) {
      case 'unoffline':
        var bzy = [];
        var bzp = [];
        oe.AF(D,
        function(W) {
          if (this.bH.vF(W.id) == 4) {
            bzy.push(W.id)
          } else if (this.bH.bjW(W.id)) {
            bzp.push(W.id)
          }
        },
        this);
        if (bzy && bzy.length) this.bH.Xi(bzy);
        if (bzp && bzp.length) this.bH.bOh(bzp);
        break;
      case 'offline':
        nm.log.Du('download', {
          type: 'album',
          id: CH.id
        });
        var bf = oe.ef(D,
        function(W) {
          return W && dc.track.bOf(W)
        });
        if (bf < 0) return dc.track.bls(D, 'fav-offline');
        ctl.actionManager.cIM(fr);
        break
      }
    };
    bb.bwK = function(cF, G, tW) {
      const bQ = localCache.ce('host.profile.userId');
      this.fd.kf({
        key: 'album_sub-' + bQ,
        ext: cF,
        id: cF.id,
        data: cF
      });
      if (tW) {
        this.bH.ej({
          key: 'track_album-' + cF.id,
          ext: {
            action: 'unoffline'
          }
        })
      }
    };
    lw('ctl').albumContextController = rh.cel.ta()
  }],
  310 : [['314', '179', '29'],
  function() {
    const lw = NEJ.P;
    const bh = NEJ.O;
    const bM = NEJ.F;
    const hh = lw('nej.e');
    const I = lw('nej.v');
    const oe = lw('nej.u');
    const bw = lw('nej.cef');
    const bq = lw('nej.ut');
    const rh = lw('nm.c');
    const bj = lw('nm.x');
    const oM = lw('nm.d');
    const uo = lw('nm.l');
    let bb;
    if (rh.cej) return;
    rh.cej = NEJ.C();
    bb = rh.cej.bm(rh.bso);
    bb.dS = function() {
      this.ov = {
        type: 110,
        conf: {
          resource: function(be) {
            return dc.ad.cB(be)
          }
        },
        action: {
          link: {
            110 : function(cF, jA) {
              if (!cF || !cF.url) {
                return
              }
              bj.R$openUrl(cF.url);
              dc.ad.dbv(cF.type + '_' + cF.adId)
            }.mb(this)
          }
        }
      };
      this.dY()
    };
    lw('ctl').adContextMenu = rh.cej.ta()
  }],
  311 : [['314', '195', '193', '29'],
  function() {
    const lw = NEJ.P;
    const bh = NEJ.O;
    const bM = NEJ.F;
    const hh = lw('nej.e');
    const I = lw('nej.v');
    const oe = lw('nej.u');
    const bw = lw('nej.cef');
    const bq = lw('nej.ut');
    const uo = lw('nm.l');
    const rh = lw('nm.c');
    const bj = lw('nm.x');
    let bb;
    if (rh.cei) return;
    rh.cei = NEJ.C();
    bb = rh.cei.bm(rh.bso);
    bb.dS = function() {
      this.ov = {
        type: 90,
        action: {
          link: {
            90 : 900002
          }
        },
        conf: {
          content: [bw.dq({
            menu_id: 900001,
            text: '查看评论',
            image_path: bj.eY('icn_lookfor')
          }), bw.dq({
            menu_id: 900002,
            text: '查看专栏文章',
            image_path: bj.eY('icn_topic')
          }), bw.dq({
            menu_id: 900006,
            text: '收藏',
            image_path: bj.eY('icn_addlist')
          }), bw.dq({
            menu_id: 900003,
            text: '分享...',
            image_path: bj.eY('icn_share')
          }), bw.dq({
            menu_id: 900004,
            text: '复制链接',
            image_path: bj.eY('icn_link')
          }), bw.dq({
            separator: !0,
            enable: !1
          }), bw.dq({
            menu_id: 900005,
            text: '删除专栏',
            image_path: bj.eY('icn_delete')
          }), bw.dq({
            menu_id: 900007,
            text: '查看专栏文章',
            image_path: bj.eY('icn_topic')
          })],
          hotkey: {
            900005 : 'Delete'
          },
          resource: function(be) {
            return dc.topic.cB(be)
          },
          check: function(G, da) {
            let eo = '查看评论';
            if (G.commentCount > 0) {
              eo += '(' + G.commentCount + ')'
            }
            bw.gk(900001).text = eo;
            if (da.fid == '-14') {
              bw.gk(900001).menu = false;
              bw.gk(900005).menu = true
            } else {
              bw.gk(900001).menu = true;
              bw.gk(900005).menu = false
            }
            if (da.fid == '-19') {
              bw.gk(900002).menu = false;
              bw.gk(900007).menu = true;
              if (G.isSub) {
                bw.gk(900006).menu = false
              } else {
                bw.gk(900006).menu = true
              }
            } else {
              bw.gk(900002).menu = true;
              bw.gk(900007).menu = false;
              bw.gk(900006).menu = false
            }
          },
          handler: function(be, G, da) {
            switch (be) {
            case 900001:
              location.hash = '#/m/song?rid=' + bj.bfb(90, G.id);
              break;
            case 900002:
            case 900007:
              location.hash = '/m/topic/?id=' + G.id;
              break;
            case 900003:
              if (this.bIo) this.bIo.bp();
              if (da.fid == '-14') dc.topic.bqv(G.id);
              this.bIo = uo.zK.bg({
                rid: G.id,
                type: 'topic'
              }).cj();
              break;
            case 900004:
              bj.boX(60, G.id);
              break;
            case 900005:
              ctl.layer.bQy(uo.bma.bg({
                title:
                '删除',
                message: '确定删除该专栏？',
                okText: '删除',
                onok: this.bwK.mb(this, G)
              }).cj());
              break;
            case 900006:
              if (bj.Qy()) return bj.bkZ('topic_sub-add');
              var bQ = localCache.ce('host.profile.userId');
              dc.topic.hG({
                key: 'topic_sub-' + bQ,
                data: G
              });
              nm.log.Du('click', {
                page: 'topiclist',
                type: 'subscribe',
                id: G.id
              });
              break
            }
          }.mb(this)
        },
        text: {
          90 : function(be) {
            const W = dc.topic.cB(be) || bh;
            return {
              text: W.title || '专栏文章',
              href: '/m/topic/?id=' + be
            }
          }
        }
      };
      this.dY()
    };
    bb.bwK = function(G) {
      const bQ = localCache.ce('host.profile.userId');
      dc.topic.kf({
        key: 'topic_sub-' + bQ,
        ext: G,
        id: G.id,
        data: G
      })
    };
    lw('ctl').topicListContextMenu = rh.cei.ta()
  }],
  312 : [['314', '179', '315', '29'],
  function() {
    const lw = NEJ.P;
    const bh = NEJ.O;
    const bM = NEJ.F;
    const hh = lw('nej.e');
    const I = lw('nej.v');
    const oe = lw('nej.u');
    const bw = lw('nej.cef');
    const bq = lw('nej.ut');
    const rh = lw('nm.c');
    const bj = lw('nm.x');
    const oM = lw('nm.d');
    const uo = lw('nm.l');
    let bb;
    if (rh.ceh) return;
    rh.ceh = NEJ.C();
    bb = rh.ceh.bm(rh.bso);
    bb.dS = function() {
      this.ov = {
        type: 91,
        action: {
          link: {
            91 : 910002
          }
        },
        conf: {
          content: [bw.dq({
            menu_id: 910022,
            text: '查看评论',
            image_path: bj.eY('icn_cmt')
          }), bw.dq({
            menu_id: 910002,
            text: '播放',
            image_path: bj.eY('icn_play')
          }), bw.dq({
            separator: !0,
            enable: !1
          }), bw.dq({
            menu_id: 910008,
            text: '收藏...',
            image_path: bj.eY('icn_addlist')
          }), bw.dq({
            menu_id: 910003,
            text: '分享...',
            image_path: bj.eY('icn_share')
          }), bw.dq({
            menu_id: 910004,
            text: '复制链接',
            image_path: bj.eY('icn_link')
          }), bw.dq({
            separator: !0,
            enable: !1
          }), bw.dq({
            menu_id: 910009,
            text: '删除视频',
            image_path: bj.eY('icn_delete')
          }), bw.dq({
            menu_id: 910020,
            text: '不感兴趣，减少这类推荐',
            image_path: bj.eY('icn_dislike')
          })],
          hotkey: {
            910002 : 'Enter',
            910008 : 'Ctrl S',
            910009 : 'Delete'
          },
          resource: function(be) {
            return dc.video.cB(be)
          },
          check: function(G, fr) {
            const bxJ = dc.video.cgK(G);
            const bXj = fr.fid == -14;
            const ckO = fr.fid == 92;
            const bjA = !navigator.offline;
            bw.gk(910002).enable = bjA;
            bw.gk(910003).enable = bjA;
            bw.gk(910008).menu = !bxJ;
            bw.gk(910008).enable = bjA;
            bw.gk(910009).menu = bXj && bxJ;
            bw.gk(910009).enable = bjA;
            bw.gk(910020).menu = ckO;
            let bpQ = '';
            if (G.commentCount > 0) {
              bpQ = '查看评论(' + G.commentCount + ')'
            } else {
              bpQ = '查看评论';
              if (typeof G.commentCount === 'undefined') {
                dc.fragment.cbY(91, G.id)
              }
            }
            bw.gk(910022).text = bpQ
          },
          reportcheck: function() {
            let W = bw.gk('810001');
            W && (W.menu = false);
            W = bw.gk('810007');
            W && (W.menu = true)
          },
          handler: function(be, G, da) {
            const bQ = localCache.ce('host.profile.userId');
            switch (be) {
            case 910022:
              location.hash = '#/m/song?rid=' + bj.bfb(91, G.id);
              break;
            case 910002:
              location.hash = '#/m2/mv/?type=1&id=' + G.id;
              break;
            case 910004:
              bj.boX(91, G.id);
              return;
            case 910008:
              dc.video.cVp(G.id);
              break;
            case 910009:
              uo.bma.VX({
                message:
                '确定不再收藏该视频？',
                data: {
                  id: G.id
                },
                onok: function(G) {
                  dc.video.cVo(G.id)
                },
                okText: '确定',
                title: '取消收藏'
              }).cj();
              break;
            case 910010:
              dc.video.bKo(G.id);
              break;
            case 910011:
              dc.video.bKk(G.id);
              break;
            case 910020:
              dc.video.cgv(G.id);
              break
            }
          }.mb(this)
        },
        share: {
          910003 : 'video'
        },
        opencomment: {
          910080 : 'video'
        },
        action: {
          play: {
            91 : 910002
          },
          share: {
            91 : 910003
          },
          fav: {
            91 : 910008
          },
          unfav: {
            91 : 910009
          },
          like: {
            91 : 910010
          },
          unlike: {
            91 : 910011
          },
          opencomment: {
            91 : 910080
          }
        }
      };
      this.dY()
    };
    lw('ctl').videoContextMenu = rh.ceh.ta()
  }],
  313 : [['194', '188', '99', '303', '304', '123', '6', '93', '190', '286', '28', '93', '84', '305', '306', '307', '308', '309', '310', '311', '312'],
  function() {
    const lw = NEJ.P;
    const bh = NEJ.O;
    const hh = lw('nej.e');
    const I = lw('nej.v');
    const oe = lw('nej.u');
    const cl = lw('nej.j');
    const bw = lw('nej.cef');
    const nk = lw('nej.cef.ut');
    const oM = lw('nm.d');
    const uo = lw('nm.l');
    const bj = lw('nm.x');
    const rh = lw('nm.c');
    const bt = lw('nm.m');
    const U = lw('nm.m.f');
    let bb;
    let Dg;
    U.jt = NEJ.C();
    bb = U.jt.bm(bt.bZ);
    bb.ca = function() {
      this.ci = 'm-ffrm';
      this.QQ();
      this.bdV = document.body;
      this.bdV.insertAdjacentHTML('afterBegin', hh.hJ('m-ffrm-module-txt'));
      const blu = hh.dK(this.bdV);
      const bjw = hh.dK(blu[2]);
      this.bnO = blu[2];
      this.cdU = bjw;
      this.hz;
      this.ew = {
        top: blu[0],
        side: bjw[0].firstElementChild,
        brief: bjw[3],
        parent: bjw[1],
        lyric: bjw[4],
        player: bjw[5],
        fmp: bjw[6]
      };
      document.mbody = bjw[1];
      document.mside = bjw[0];
      document.mhead = blu[0];
      this.btj = document.mbody;
      this.bBO = document.mside;
      this.cwH = blu[3];
      this.cwG = blu[4];
      this.cdV = blu[5];
      this.cdW = blu[6];
      this.cdY = blu[7];
      const cY = hh.dK(blu[1]);
      this.tA = nk.bwB.bg({
        min: cY[2],
        max: cY[3],
        dbmax: blu[0],
        close: cY[4],
        dragger: blu[0],
        clazz: 'max',
        resizes: {
          bottomright: blu[3],
          right: blu[4],
          topleft: this.cdV,
          topright: this.cdW,
          bottomleft: this.cdY
        },
        onbeforeclose: this.Ru.mb(this),
        onstatuschange: this.cea.mb(this)
      });
      this.cec = cY[1];
      I.bs(cY[1], 'click', this.ddu.mb(this));
      I.bs(document, 'menuaction', this.CQ.mb(this));
      I.bs(window, 'requesterror', this.ddv.mb(this));
      I.bs(rh.bql, 'updatehotkey', this.cdh.mb(this));
      I.bs(rh.bql, 'hotkey', this.bTN.mb(this));
      I.bs(this.bBO.lastElementChild, 'mousedown', this.bHt.mb(this));
      I.bs(document, 'mousemove', this.bHs.mb(this));
      I.bs(document, 'mouseup', this.bHn.mb(this));
      I.bs(window, 'resize', this.bAw.mb(this));
      I.bs(document, 'beforeexit', this.ddB.mb(this));
      this.LF = {
        begin: !1,
        x: 0,
        y: 0,
        now: 199,
        min: 199,
        max: 199,
        mask: null,
        minmax: 199,
        offset: 1022 - 3,
        mnminw: 820,
        mnmaxw: 820,
        mnmaxws: [1100, 1050, 997, 980, 866, 823],
        allclazz: 'mq-763 mq-806 mq-920 mq-937 mq-990 mq-1040',
        mq: !1
      };
      bw.VG('foregroundpreinstance', 'app', this.ddD.mb(this));
      bw.VG('requestchangetomain', 'player', this.IG.mb(this));
      bw.VG('requestclose', 'player', this.tA.Rq.mb(this.tA));
      bw.VG('desktoplyricaction', 'player', this.bGT.mb(this), 2);
      this.dB = oM.kg.bg();
      this.rF = nej.cef.ut.BB.ta();
      this.cep = 0;
      bw.VG('FontSize', 'player', this.ddF.mb(this));
      bw.R$exec('app.getCooperation', this.ddG.mb(this));
      bw.R$exec('app.getAppStartCommand', this.ddH.mb(this));
      I.bs(location, 'urlchange', this.bzF.mb(this));
      this.bAw();
      this.dv = '';
      hh.hQ('g_placeheader');
      bj.cfZ()
    };
    bb.dJ = (function() {
      let Sy = !1;
      const ceq = function(fr, bc) {
        fr.totl--;
        if (fr.done) return;
        let DQ = !1;
        if (bc && bc.code == 200 && bc.updateFiles && bc.updateFiles.length) {
          if (fr.coreVersion == this.rF.cDa(bc.updateFiles)) {
            fr.newFeature = this.rF.ciC(bc.updateFiles);
            fr.updateTitle = this.rF.ciz(bc.updateFiles);
            fr.subTitle = this.rF.ciA(bc.updateFiles);
            DQ = !0
          }
        }
        if (DQ || fr.totl <= 0) {
          fr.done = !0;
          uo.bkb.bg({
            title: '已升级到' + (fr.version ? fr.version: '新') + '版本',
            message: this.rF.dax(fr.version, fr.subTitle, fr.newFeature),
            nocl: true,
            hasstyle: true,
            okText: '知道了'
          }).cj()
        }
      };
      const ddI = function(fr, cwk) {
        fr.coreVersion = cwk;
        fr.done = !1;
        if (fr.updateSetting && fr.updateSetting.version == cwk && fr.updateSetting.newFeature && fr.updateSetting.newFeature.length) {
          fr.newFeature = fr.updateSetting.newFeature;
          fr.updateTitle = fr.updateSetting.updateTitle;
          fr.subTitle = fr.updateSetting.subTitle;
          fr.totl = 0;
          ceq.call(this, fr)
        } else {
          fr.totl = 2;
          bj.bR('/api/pc/version', {
            core: '1.0.0.0',
            native: '',
            orpheus: ''
          },
          ceq.mb(this, fr));
          bj.bR('/api/pc/version?includeUnopen=true', {
            core: '1.0.0.0',
            native: '',
            orpheus: ''
          },
          ceq.mb(this, fr))
        }
      };
      const cet = function(blf, ddK, kE) {
        const fr = {
          newFeature: blf,
          updateSetting: ddK,
          updateTitle: '',
          subTitle: '',
          version: kE.version
        };
        bw.R$exec('update.getVersion', 'core', ddI.mb(this, fr))
      };
      const dKN = function() {
        const cew = bj.Dk(11,
        function(bl) {
          const Hr = bl.ft();
          const bCn = !!Hr.betaGuideShowed2;
          if (!bCn) {
            Hr.betaGuideShowed2 = !0;
            bl.iV(Hr)
          }
          return ! bCn
        });
        if (cew) {
          const cex = document.createElement('div');
          hh.eA(cex, 'm-guide-beta', {});
          document.body.appendChild(cex);
          I.bs(hh.bR('x-id-guide-beta'), 'click',
          function() {
            hh.hV(cex)
          })
        }
      };
      const ddM = function(ddN) {
        if (ddN == 'updaterun') {
          const Cw = dc.setting.ft();
          const brD = (Cw || bh).updateFiles || [] bw.R$exec('update.getVisualVersion', cet.mb(this, brD, dc.setting.bUh()));
          if (Cw && Cw.updateFiles) {
            delete Cw.updateFiles;
            dc.setting.iV(Cw)
          }
        }
        this.cey(2)
      };
      return function(fr) {
        if (!Sy) {
          Sy = !0;
          this.dR(fr);
          bw.R$exec('app.getAppStartType', ddM.mb(this));
          if (this.cep >= 3) {
            this.bBz()
          }
          this.btt();
          if (APP_CONF.autoRun) {
            this.tA.ddA()
          } else {
            if ((this.dB.bnW() || bh).maximize) {
              this.tA.ddz();
              this.tA.bdG()
            } else {
              this.tA.ddy()
            }
          }
          if (!bj.Qy()) {
            bj.bii('/api/privacy/info/get/v2', {},
            function(bea) {
              if (bea.code == 200) {
                if (bea.data.needPop) {
                  let bF = bea.data.content;
                  bea.data.urlList.forEach(function(bP) {
                    bF = bF.replace(bP.content, '<a style="color: #507daf;" data-href2="' + bP.url + '">' + bP.content + '</a>')
                  });
                  bF = bF.replace(/\/n/g, '<br />');
                  uo.bkb.bg({
                    title: bea.data.title,
                    message: bF,
                    okText: '同意',
                    nocl: true,
                    noClose: true,
                    hasstyle: true,
                    onOk: function() {
                      bj.bii('/api/privacy/info/save', {},
                      function(bea) {
                        this.cR && this.cR()
                      }.mb(this))
                    }
                  }).cj()
                }
              }
            })
          }
          bj.bii('/api/point/retrieve', {},
          this.ddQ.mb(this))
        } else {
          this.bnO.style.display = 'none';
          this.cdU[0].style.display = 'none';
          oe.AF(this.cdU,
          function(K) {
            this.bnO.appendChild(K)
          },
          this);
          this.bnO.style.display = '';
          bj.kt('/?/frame/side/', {
            cmd: 'leftrefresh',
            data: fr
          });
          this.bnO.firstElementChild.style.display = ''
        }
      }
    } ());
    bb.ea = function() {
      oe.AF(this.cdU,
      function(K) {
        hh.hV(K)
      },
      this)
    };
    bb.dKM = function() {
      const Cw = this.dB.ft();
      Cw.updateFiles = [];
      this.dB.iV(Cw)
    };
    bb.Ru = function(il) {
      nm.log.BS(nm.log.ACTION.CLOSE);
      bw.uT('mini_player');
      il.action = 'confirm';
      const Cw = this.dB.ft();
      var bxY = bxY = Cw.closeFrame;
      if (bxY.remind) {
        if (bxY.close == 'tray') {
          bw.uT()
        } else {
          this.kq({
            data: {
              cmd: 'checkbeforeexit'
            }
          })
        }
      } else {
        this.IG();
        if (this.ceB) this.ceB.bp();
        this.ceB = uo.cJE.bg({
          onok: this.ddS.mb(this)
        });
        this.ceB.cj()
      }
    };
    bb.ddS = function(il) {
      if (il.cXz) {
        bw.uT()
      } else {
        this.kq({
          data: {
            cmd: 'checkbeforeexit'
          }
        })
      }
    };
    bb.ddD = function() {
      if (bj.bFp()) {
        bj.kt('/m', {
          cmd: 'switchtomain'
        })
      }
      bw.Ya(localCache.bR('window_name'))
    };
    bb.ddu = function() {
      nm.log.BS(nm.log.ACTION.MINI_BTN_PAGE);
      this.IO()
    };
    bb.IO = function(il) {
      localCache.pK('window_name', 'mini_player');
      bw.uT();
      bw.uU('mini_player');
      bw.R$exec('player.setAlwaysOnTop', bj.Dk(11,
      function(bl) {
        return !! bl.HB().minitop
      }));
      this.cea({
        status: 'mini'
      });
      nm.log.dvH()
    };
    bb.IG = function(eB) {
      if ( !! eB && eB == 1) {
        if (!this.dX) this.dX = oM.cg.bg();
        const da = this.dX.bhQ().from;
        if (da.fm) {
          if (location.hash != '#/m/fm/') {
            location.hash = '#/m/fm/'
          }
        } else {
          I.bk(document, 'menuaction', {
            id: 100
          })
        }
      }
      localCache.pK('window_name', '');
      this.cea({
        status: 'main'
      });
      if (eB != 1) bw.uT('mini_player');
      setTimeout(function(eB) {
        if (eB == 1) bw.uT('mini_player');
        bw.Ya()
      }.mb(this, eB), eB == 1 ? 500 : 25)
    };
    bb.cea = function(il) {
      il = il || bh;
      let ccR = !1;
      let QH = 1050;
      const it = il.status;
      if (this.dv == it) return;
      this.dv = it;
      switch (it) {
      case 'mini':
        ccR = !0;
        break;
      case 'main':
        break;
      case 'hide':
        ccR = !0;
        break;
      case 'show':
        break;
      case 'zoom':
        break;
      case 'maximize':
        hh.bG(this.cwG, 'f-dn');
        hh.bG(this.cdV, 'f-dn');
        hh.bG(this.cdW, 'f-dn');
        hh.bG(this.cdY, 'f-dn');
        hh.bG(this.cwH, 'f-dn');
        this.bxK('maximize', !0);
        if (bj.bkv() == 'discrecommend') {
          ctl.order.bVg()
        }
        break;
      case 'minimize':
        ccR = !0;
        QH = 1052;
        localCache.pK('window_name', '');
        break;
      case 'restore':
        hh.bD(this.cwG, 'f-dn');
        hh.bD(this.cdV, 'f-dn');
        hh.bD(this.cdW, 'f-dn');
        hh.bD(this.cdY, 'f-dn');
        hh.bD(this.cwH, 'f-dn');
        this.bxK('maximize', !1);
        if (bj.bkv() == 'discrecommend') {
          ctl.order.bVg()
        }
        break
      }
      if (ccR) {
        if (!localCache.bR('mq-hide')) {
          localCache.pK('mq-hide', !0);
          hh.bG(document.body, 'mq-hide')
        }
        if (this.dv == 'minimize') {
          bj.bdE(this.cvR.mb(this), 500, 'main-page-show-reset-thumbnail')
        }
        bj.kt('/m/disc/rec/', {
          cmd: 'mainPageHide'
        })
      } else {
        if (localCache.bR('mq-hide')) {
          localCache.pK('mq-hide', !1);
          hh.bD(document.body, 'mq-hide');
          bj.bdE(this.cvR.mb(this), 500, 'main-page-show-reset-thumbnail')
        }
        bj.kt('/m/disc/rec/', {
          cmd: 'mainPageShow'
        })
      }
      if (localCache.bR('window_name') == 'mini_player') {
        QH = 1051
      }
      this.ddV(QH);
      this.bor(it)
    };
    bb.cvR = function() {
      if (localCache.bR('mq-hide') && this.dv != 'minimize') return;
      let cvJ = '播放';
      let cvH = 'play';
      if (ctl.cefPlayer.bmV()) {
        cvJ = '暂停';
        cvH = 'pause'
      }
      bw.R$exec('app.setThumbnail', {
        btnLeft: {
          id: 300,
          tooltip: '上一首',
          url: bj.buR('prev')
        },
        btnMiddle: {
          id: 301,
          tooltip: cvJ,
          url: bj.buR(cvH)
        },
        btnRight: {
          id: 302,
          tooltip: '下一首',
          url: bj.buR('next')
        }
      })
    }
    bb.ddV = (function() {
      const bhv = [1050, 1051, 1052];
      const ddY = ['icn_normal', 'icn_max', 'icn_min'];
      return function(be) {
        const Yz = bw.gk(105);
        oe.AF(bhv,
        function(QH, bf) {
          const W = bw.gk(QH);
          if (QH == be) {
            Yz.text = W.text;
            Yz.image_path = bj.eY(ddY[bf]);
            W.check_image_path = bj.eY('icn_checked')
          } else {
            delete W.check_image_path
          }
        })
      }
    } ());
    bb.CQ = function(il) {
      switch (il.id) {
      case 1050:
        this.tA.Rt();
        this.IG();
        return;
      case 1051:
        this.IO();
        return;
      case 1052:
        this.tA.IM();
        bw.uT('mini_player');
        return;
      case 201:
      case 1053:
        this.IG();
        return;
      case 1006:
        this.IG();
        bj.kt('/?/frame/brief/', {
          cmd: 'min'
        });
        dispatcher.cu('/m3/setting/');
        return;
      case 330007:
        dc.setting.cJR();
        bj.kt('/m3/setting/', {
          cmd: 'refresh'
        });
        return;
      case 330008:
        dc.setting.cJZ(null, 'desktopsetting');
        bj.kt('/m3/setting/', {
          cmd: 'refresh'
        });
        bj.kt('/?/track/', {
          cmd: 'updatetranslate'
        });
        bj.kt('/m/fm/', {
          cmd: 'updatetranslate'
        });
        bj.kt('/?/frame/foot/lyric/', {
          cmd: 'updatetranslate'
        });
        return;
      case 330001:
        bj.Dk(11,
        function(bl) {
          const Cw = bl.blK();
          Cw.lineMode = !Cw.lineMode;
          bj.bLf(Cw.lineMode, Cw.lineMode ? Cw.oneLineAlign: Cw.doubleLineAlign);
          bl.boN(Cw)
        });
        bj.kt('/m3/setting/', {
          cmd: 'refresh'
        });
        return;
      case 330100:
      case 330101:
      case 330102:
      case 330103:
        var bws = il.id - 330100;
        bj.Dk(11,
        function(bl) {
          const Cw = bl.blK();
          if (Cw.lineMode) {
            Cw.oneLineAlign = bws
          } else {
            Cw.doubleLineAlign = bws
          }
          bj.bLf(Cw.lineMode, Cw.lineMode ? Cw.oneLineAlign: Cw.doubleLineAlign);
          bl.boN(Cw)
        });
        bj.kt('/m3/setting/', {
          cmd: 'refresh'
        });
        return;
      case 330020:
      case 330030:
      case 330040:
      case 330050:
      case 330060:
      case 330070:
        var bO = {
          330020 : {
            prein: '酷炫黑',
            skin: 'default'
          },
          330030 : {
            prein: '可爱粉',
            skin: 'pink'
          },
          330040 : {
            prein: '清新绿',
            skin: 'green'
          },
          330050 : {
            prein: '天际蓝',
            skin: 'blue'
          },
          330060 : {
            prein: '土豪金',
            skin: 'golden'
          },
          330070 : {
            prein: '自定义',
            skin: 'custom'
          }
        } [il.id];
        if (!bO) return;
        bj.Dk(11,
        function(bl) {
          const Cw = bl.blK();
          if (Cw.prein == bO.prein) return;
          const Hr = bO.prein == '自定义';
          const biX = Cw.color;
          const buD = Hr ? biX.customcolor || biX.val: bl.cdg(bO.skin);
          if (!buD) return;
          biX.isCustom = Hr ? !0 : !1;
          if (Hr && !biX.customcolor) biX.customcolor = buD;
          biX.val = buD.concat();
          Cw.prein = bO.prein;
          Cw.outline = bl.bUo(bO.prein);
          Cw.color.isUse = true;
          bw.R$exec('player.setOutlineColor', Cw.outline[0], Cw.outline[1]);
          bw.R$exec('player.setLRCColor', buD[0], buD[1], buD[2], buD[3]);
          bl.boN(Cw);
          bj.kt('/m3/setting/', {
            cmd: 'refresh'
          })
        });
        return;
      case 330003:
        dispatcher.cu('/m3/setting/?to=desklrc&time=' + +(new Date()));
        this.IG();
        return;
      case 203:
      case 330004:
        var cvG = !1;
        if (localCache.bR('show_lyric_type') != 0) {
          cvG = !0;
          bj.Dk(11,
          function(bl) {
            const Cw = bl.HB();
            bj.kt('/?/frame/foot/player/', 'closedesktoplrc');
            Cw.showLyricType = 0;
            bl.us(Cw);
            bj.kt('/?/frame/foot/player/', 'synclyrictype');
            bj.kt('/?/frame/foot/player/', 'closedesktoplrc')
          })
        }
        if (localCache.bR('desktop_lyric_close')) {
          bj.kt('/?/frame/foot/player/', 'opendesktoplrc');
          nm.log.BS('click', null, null, {
            type: 'desklrc',
            value: 'on',
            source: il.id == 330004 ? 'tray': 'mini'
          })
        } else {
          bj.kt('/?/frame/foot/player/', 'closedesktoplrc');
          nm.log.BS('click', null, null, {
            type: 'desklrc',
            value: 'off',
            source: il.id == 330004 ? 'tray': 'mini'
          })
        }
        if (cvG) {
          bj.kt('/m3/setting/', {
            cmd: 'refresh'
          })
        }
        return;
      case 204:
      case 330005:
      case 330015:
        if (localCache.bR('desktop_lyric_lock')) {
          this.bGT('unlock');
          if (il.id != 330015) nm.log.BS('click', null, null, {
            type: 'unlock',
            source: il.id == 330005 ? 'tray': 'mini'
          })
        } else {
          this.bGT('lock');
          if (il.id != 330015) nm.log.BS('click', null, null, {
            type: 'lock',
            source: il.id == 330005 ? 'tray': 'mini'
          })
        }
      }
    };
    bb.ddv = function(il) {
      const bO = il.ext_req_conf;
      const ji = (bO || bh).key;
      logger.warn('requesterror|' + ji + '|' + bj.bjU(il), 'frame/frame.js', '__onRequestError');
      if ((il || bh).code == 301) {
        bj.cKB(ji)
      } else if ((il || bh).code == 302) {
        bj.bkZ(ji)
      }
    };
    bb.kq = function(bc) {
      if (!bc || !bc.data) return;
      switch (bc.data.cmd) {
      case 'switchtomain':
        this.IG();
        break;
      case 'init':
        this.cep++;
        if (this.cep >= 2) this.bBz();
        break;
      case 'updatehotkey':
        this.cdh();
        break;
      case 'test':
        this.bGT('setting');
        break;
      case 'pushconnected':
        this.cey(1);
        break;
      case 'detail':
        this.bGT('detail');
        break;
      case 'checkbeforeexit':
        var eB = bj.Dk(4,
        function(bl) {
          return (bl.crK() || bh).state
        });
        if (eB == 1) {
          this.IG();
          if (this.cvA) this.cvA.bp() this.cvA = uo.bkb.bg({
            title: '关闭提示',
            message: '正在添加本地音乐。现在退出，手机将无法同步并播放歌单中的本地音乐╮(╯▽╰)╭',
            okText: '现在退出',
            clText: '再等等',
            onok: this.cvz.mb(this)
          }).cj()
        } else {
          this.cvz()
        }
        break
      }
      if (bc.data.eventType == 'localResize') {
        this.deb = bc.data.inLocal;
        this.dec = bc.data.rminw - 10,
        this.ded = bc.data.rnode
      }
    };
    bb.cvz = function() {
      bw.R$exit()
    };
    bb.cdh = function() {
      const Cw = ctl.hotkey.brz();
      if ( !! Cw && Cw.shortcut) {
        const bf = oe.ef(Cw.shortcut,
        function(W) {
          return W.name == 'mini_max'
        });
        if (bf > -1 && Cw.shortcut[bf].notconflict) {
          const Yt = Cw.shortcut[bf].val;
          this.cec.title = 'mini模式（' + Yt + '）';
          bw.R$exec('player.updateTooltips', '完整模式（' + Yt + '）')
        } else {
          this.cec.title = 'mini模式';
          bw.R$exec('player.updateTooltips', '完整模式')
        }
      }
    };
    bb.bHt = function(il) {
      this.LF.begin = !0;
      this.LF.x = il.x;
      this.LF.y = il.y;
      this.bHh();
      if (!this.LF.mask) {
        const K = document.createElement('div');
        K.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;cursor:e-resize;z-index:99999;';
        this.LF.mask = K
      }
      this.bor('resize');
      document.body.appendChild(this.LF.mask)
    };
    bb.bor = function(Z) {
      bj.kt('/m/playlist/', {
        type: Z
      });
      bj.kt('/m/program/', {
        type: Z
      });
      bj.kt('/m/album/', {
        type: Z
      });
      bj.kt('/m/local', {
        type: Z
      });
      bj.kt('/m/offline/complete/', {
        type: Z
      });
      bj.kt('/m/offline/download/', {
        type: Z
      });
      bj.kt('/m/offline/program/', {
        type: Z
      })
    };
    bb.bHs = function(il) {
      if (!this.LF.begin) return;
      const fH = il.x;
      if (this.deb) {
        if (this.ded.offsetWidth < this.dec) {
          if (fH - this.LF.now > 0) return
        }
      }
      if (fH >= this.LF.min && fH <= this.LF.max) this.bmr(fH);
      else if (fH < this.LF.min && this.LF.now > this.LF.min) this.bmr(this.LF.min);
      else if (fH > this.LF.max && this.LF.now < this.LF.max) this.bmr(this.LF.max)
    };
    bb.bHn = function(il) {
      if (!this.LF.begin) return;
      this.LF.begin = !1;
      this.bor('resizeEnd');
      this.LF.mask.parentNode.removeChild(this.LF.mask);
      nm.log.BS('stretch', null, null, {
        type: 'leftpanel'
      })
    };
    bb.bAw = function() {
      this.bwl();
      this.btt(!0);
      if (!this.tA.cww()) {
        bj.bdE(this.deh.mb(this), 1e3, 'save_window_resolution')
      }
      bj.kt('/?/track/', {
        cmd: 'scroll'
      });
      I.bk(this.btj, 'scroll')
    };
    bb.deh = function() {
      if (this.tA.cww()) return;
      this.bxK('resolution', window.innerWidth, window.innerHeight)
    };
    bb.bmr = function(fH) {
      if (this.LF.now == fH) return;
      if (fH < 0) return;
      this.LF.now = fH;
      this.bBO.style.width = fH + 'px';
      this.btj.style.left = fH + 1 + 'px';
      const G = {
        cmd: 'resize',
        width: fH
      };
      bj.kt('/?/frame/brief/', G);
      bj.kt('/?/frame/top/', G);
      this.btt();
      this.bxK('side', fH)
    };
    bb.bHh = function() {
      this.bwl();
      this.LF.max = Math.max(this.LF.offset - this.LF.mnminw, this.LF.minmax)
    };
    bb.bwl = function() {
      this.LF.offset = Math.max(document.body.offsetWidth, 1022) - 3
    };
    bb.btt = function(bHb) {
      const bty = this.LF.offset - this.LF.now;
      if ( !! bHb && bty < this.LF.mnminw) {
        this.bmr(this.LF.offset - this.LF.mnminw);
        return
      }
      if (bty >= this.LF.mnmaxw) {
        const cL = [];
        let bTJ = this.LF.allclazz;
        for (let i = 0, ii = this.LF.mnmaxws.length; i < ii; i++) {
          if (bty >= this.LF.mnmaxws[i]) {
            cL.unshift('mq-' + (this.LF.mnmaxws[i] - 60));
            bTJ = bTJ.replace(cL[0], '');
            for (let j = i + 1, jj = this.LF.mnmaxws.length; j < jj; j++) {
              cL.unshift('mq-' + (this.LF.mnmaxws[j] - 60));
              bTJ = bTJ.replace(cL[0], '')
            }
            break
          }
        }
        hh.mu(document.body, bTJ, cL.join(' '));
        this.LF.mq = !0
      } else {
        if (!this.LF.mq) return;
        hh.bD(document.body, this.LF.allclazz);
        this.LF.mq = !1
      }
    };
    bb.bxK = function(Z, fH, fS) {
      const biC = this.dB.bnW();
      if (!biC) return;
      switch (Z) {
      case 'resolution':
        if (!fH || !fS) return;
        if (biC.resolution.width == fH && biC.resolution.height == fS) return;
        this.dB.bwq('resolution', {
          width: fH,
          height: fS
        });
        break;
      case 'side':
        if (biC.side.width == fH) return;
        this.dB.bwq('side', {
          width: fH
        });
        break;
      case 'maximize':
        this.dB.bwq('maximize', !!fH);
        break
      }
    };
    bb.bBz = function() {
      const biC = this.dB.bnW();
      const bV = biC.resolution.width;
      let fH = biC.side.width;
      this.LF.offset = Math.max(document.body.offsetWidth, 1022, bV) - 3;
      if (this.LF.offset - fH < this.LF.mnminw) {
        fH = Math.max(this.LF.minmax, this.LF.offset - this.LF.mnminw)
      }
      this.bmr(fH);
      bw.R$exec('winhelper.loadingFinished')
    };
    bb.ddB = function() {
      const Cw = this.dB.ft();
      const bxM = [];
      const ix = ['mymusic', 'download', 'windowsmedia', 'itunes', 'cloudmusic', 'kugou', 'baidumusic'];
      if (Cw && Cw.localdir) {
        Cw.localdir.forEach(function(W) {
          if (W && (!W.hide || dem(W.name))) bxM.push(W)
        });
        Cw.localdir = bxM;
        this.dB.iV(Cw)
      }
      bj.Dk(4,
      function(bl) {
        bl.cAd()
      }) function dem(bn) {
        return oe.ef(ix,
        function(btw) {
          if (bn.indexOf(btw) != -1) return true
        }) != -1
      }
      nk.yN.ta().cR()
    };
    bb.ddF = function(km) {
      const YD = this.dB.blK();
      km = Math.min(Math.max(km, 20), 96);
      YD.font.size = km;
      this.dB.boN(YD);
      const biA = YD.font;
      dispatcher.kt({
        to: '/m3/setting/',
        from: '',
        data: {
          cmd: 'ondesklrcfschanged',
          size: km
        },
        mode: 0
      })
    };
    bb.bGT = function(Z) {
      switch (Z) {
      case 'detail':
        if (!this.dX) this.dX = oM.cg.bg();
        var da = this.dX.bhQ().from;
        if (da.fm) {
          this.IG();
          if (location.hash != '#/m/fm/') {
            location.hash = '#/m/fm/'
          }
          break
        }
        nm.log.BS('songbtn', null, null, {
          type: 'desklrc'
        });
        this.IG(1);
        break;
      case 'playprev':
        break;
      case 'play_pause':
        break;
      case 'playnext':
        break;
      case 'setting':
        this.den();
        bw.zL(localCache.bR('desktop_lyric_menu'), 3);
        nm.log.BS('click', null, null, {
          type: 'setup',
          source: 'desklrc'
        });
        break;
      case 'lock':
        bw.R$exec('player.setLock', !0);
        var bmf = bw.gk(330005);
        bmf.text = '解锁桌面歌词';
        bmf.image_path = bj.eY('icn_unlock');
        localCache.pK('desktop_lyric_lock', !0);
        nm.log.BS('click', null, null, {
          type: 'lock',
          source: 'desklrc'
        });
        bj.Dk(11,
        function(bl) {
          const bxF = bl.HB();
          if (!bxF) return;
          bxF.lockLyric = !0;
          bl.us(bxF)
        });
        break;
      case 'unlock':
        bw.R$exec('player.setLock', !1);
        var bmf = bw.gk(330005);
        bmf.text = '锁定桌面歌词';
        bmf.image_path = bj.eY('icn_lock');
        localCache.pK('desktop_lyric_lock', !1);
        bj.Dk(11,
        function(bl) {
          const bxF = bl.HB();
          if (!bxF) return;
          bxF.lockLyric = !1;
          bl.us(bxF)
        });
        break;
      case 'offset_back':
        nm.log.BS('click', null, null, {
          type: 'adjustlrc',
          source: 'desklrc'
        });
        bj.kt('/?/frame/foot/player/', 'ajustlrcoffsetback2');
        break;
      case 'offset_forward':
        nm.log.BS('click', null, null, {
          type: 'adjustlrc',
          source: 'desklrc'
        });
        bj.kt('/?/frame/foot/player/', 'ajustlrcoffsetforward2');
        break;
      case 'close':
        nm.log.BS('click', null, null, {
          type: 'desklrc',
          value: 'off',
          source: 'desklrc'
        });
        bj.kt('/?/frame/foot/player/', 'closedesktoplrc');
        break
      }
    };
    bb.den = function() {
      if (!localCache.bR('desktop_lyric_menu')) {
        localCache.pK('desktop_lyric_menu', {
          content: [bw.dq({
            text: '总在最前',
            menu_id: 330007,
            enable: !0,
            image_path: bj.eY('icn_top')
          }), bw.dq({
            text: '单行模式/双行模式',
            menu_id: 330001,
            enable: !0
          }), bw.dq({
            text: '外文歌词显示翻译',
            menu_id: 330008,
            enable: !0,
            image_path: bj.eY('icn_translate')
          }), bw.dq({
            text: '对齐方式',
            menu_id: 330006,
            enable: !0,
            children: [bw.dq({
              text: '居中',
              menu_id: 330100,
              enable: !0,
              image_path: bj.eY('icn_align_0')
            }), bw.dq({
              text: '左右分离',
              menu_id: 330101,
              enable: !0,
              image_path: bj.eY('icn_align_1')
            }), bw.dq({
              text: '左对齐',
              menu_id: 330102,
              enable: !0,
              image_path: bj.eY('icn_align_2')
            }), bw.dq({
              text: '右对齐',
              menu_id: 330103,
              enable: !0,
              image_path: bj.eY('icn_align_3')
            })]
          }), bw.dq({
            text: '更换配色',
            menu_id: 330002,
            enable: !0,
            image_path: bj.eY('icn_font'),
            children: [bw.dq({
              text: '自定义',
              menu_id: 330070,
              enable: !0
            }), bw.dq({
              text: '酷炫黑',
              menu_id: 330020,
              enable: !0
            }), bw.dq({
              text: '可爱粉',
              menu_id: 330030,
              enable: !0
            }), bw.dq({
              text: '清新绿',
              menu_id: 330040,
              enable: !0
            }), bw.dq({
              text: '天际蓝',
              menu_id: 330050,
              enable: !0
            }), bw.dq({
              text: '土豪金',
              menu_id: 330060,
              enable: !0
            })]
          }), bw.dq({
            separator: !0
          }), bw.dq({
            text: '更多设置',
            menu_id: 330003,
            enable: !0,
            image_path: bj.eY('icn_more')
          })],
          hotkey: null
        })
      }
      const Cw = bj.Dk(11,
      function(bl) {
        return bl.blK()
      });
      if (Cw) {
        const bEF = Cw.lineMode;
        const bmf = bw.gk(330001);
        const bTU = Cw.noTop;
        const cTT = bw.gk(330007);
        const dep = !Cw.noTranslate;
        const cTS = bw.gk(330008);
        bmf.text = bEF ? '双行模式': '单行模式';
        bmf.image_path = bj.eY(bEF ? 'icn_twoline': 'icn_oneline');
        let ccb = bw.gk(330101);
        if (bTU) {
          delete cTT.check_image_path
        } else {
          cTT.check_image_path = bj.eY('icn_checked')
        }
        if (dep) {
          cTS.check_image_path = bj.eY('icn_checked')
        } else {
          delete cTS.check_image_path
        }
        if (!bEF) {
          ccb.menu = !0;
          var bws = Cw.doubleLineAlign || 0
        } else {
          ccb.menu = !1;
          var bws = Cw.oneLineAlign || 0
        }
        ccb = bw.gk(330006);
        ccb.image_path = bj.eY('icn_align_' + bws);
        for (var i = 0; i <= 3; i++) {
          const cTP = bw.gk(330100 + i);
          if (i == bws) {
            cTP.check_image_path = bj.eY('icn_checked')
          } else {
            delete cTP.check_image_path
          }
        }
        const bpZ = Cw.prein || '自定义';
        for (var i = 2; i <= 7; i++) {
          const bwy = bw.gk(33e4 + i * 10);
          if (bwy.text == bpZ) {
            bwy.check_image_path = bj.eY('icn_checked')
          } else {
            delete bwy.check_image_path
          }
        }
      }
    };
    bb.ddG = function(gl) {
      let gH = 'netease';
      const bsY = /^\s*$/;
      if (gl && gl.main && gl.sub && !gl.main.match(bsY) && !gl.sub.match(bsY)) {
        gH = gl.main.trim() + gl.sub.trim()
      }
      nm.log.Du('activeclient', {
        source: gH,
        resolution: window.screen.width + 'x' + window.screen.height + 'x' + window.devicePixelRatio
      }) bj.R$addCookies({
        channel: gH
      },
      null, true).then(this.cey.mb(this, 0));
      if (APP_CONF.beta_end_time && APP_CONF.beta_end_time < ctl.dateSync.cgW()) {
        uo.bkb.bg({
          title: '测试版已到期',
          message: '感谢参与本次内测，请前往官网下载正式版本~',
          nocl: true,
          noClose: true,
          okText: '前往下载',
          onok: function() {
            bj.R$openUrl(APP_CONF.domain + '/download');
            nej.cef.R$exit()
          }
        }).cj()
      }
    };
    bb.cey = (function() {
      let cca = !1;
      let bTI = !1;
      let cfn = !1;
      let tW = !1;
      let cfp = !1;
      return function(Z) {
        if (Z == 0) {
          cca = !0;
          bTI = bj.Dk(14,
          function(bl) {
            return bl.deE()
          })
        } else if (Z == 1) {
          bTI = !0
        } else if (Z == 2) {
          cfn = !0
        }
        logger.info({
          type: Z,
          cookieSetted: cca,
          pushConnected: bTI,
          check: tW
        },
        'frame/farme/index.js', '__checkUpdate');
        if (!tW && cca && cfn) {
          tW = !0;
          if (bTI) {
            cfp = !0
          }
          this.rF.mj(APP_CONF.domain + '/api/pc/version', null, !0)
        } else if (!cfp && !!tW && cca && cfn && bTI) {
          cfp = !0;
          this.rF.mj(APP_CONF.domain + '/api/pc/version', null, !0)
        }
      }
    } ());
    bb.ddQ = function(bc) {
      if (bc && bc.data && bc.data.length) {
        oe.AF(bc.data,
        function(W) {
          if (W && W.id) {
            switch (W.id) {
            case 4:
              APP_CONF.point.lrc = W.pointCount || 0;
              break;
            case 5:
              APP_CONF.point['lrc-translate'] = W.pointCount || 0;
              break;
            case 6:
              APP_CONF.point['lrc-scroll'] = W.pointCount || 0;
              break
            }
          }
        })
      }
    };
    bb.ddH = function(bbb) {
      if (bbb && bbb.versign_check != null && bbb.versign_check != 0) {
        nm.log.Du('sysaction', {
          type: 'versignfail'
        });
        uo.cxU.bg({
          title: '安装验证失败',
          message: '安装验证失败！请前往<a href="javascript:;" class="s-fc2 j-link">官网</a>下载最新版本~',
          nocl: true,
          hasstyle: true,
          okText: '知道了'
        }).cj()
      }
    };
    bb.bTN = function(il) {
      switch ((il || bh).action) {
      case 'minimax':
        if (!localCache.bR('window_name')) {
          I.bk(this.cec, 'click')
        } else {
          this.IG()
        }
        break;
      case 'closewindow':
        this.tA.Rq();
        break
      }
    };
    bb.bzF = function(il) {
      const eC = il.path || '';
      const bMa = eC.substr(0, 4);
      if (bMa == '/m3/') {
        if (this.ew.player.parentNode != this.bnO) {
          this.bnO.appendChild(this.ew.player)
        }
        if (this.ew.fmp.parentNode != this.bnO) {
          this.bnO.appendChild(this.ew.fmp)
        }
        hh.bG(this.ew.lyric.childNodes[0], 'm-lyric-set');
        if (this.ew.lyric.parentNode != this.bnO) {
          this.bnO.appendChild(this.ew.lyric)
        }
      } else if (bMa == '/m2/') {
        if (this.ew.player.parentNode == this.bnO) {
          hh.hV(this.ew.player)
        }
        if (this.ew.fmp.parentNode == this.bnO) {
          hh.hV(this.ew.fmp)
        }
        if (this.ew.lyric.parentNode == this.bnO) {
          hh.hV(this.ew.lyric)
        }
      } else {
        if (this.ew.player.parentNode != this.bnO) {
          this.bnO.appendChild(this.ew.player)
        }
        if (this.ew.fmp.parentNode != this.bnO) {
          this.bnO.appendChild(this.ew.fmp)
        }
        hh.bD(this.ew.lyric.childNodes[0], 'm-lyric-set');
        if (this.ew.lyric.parentNode != this.bnO) {
          this.bnO.appendChild(this.ew.lyric)
        }
      }
    };
    bj.bX('/m', U.jt)
  }]
},
['313'])
