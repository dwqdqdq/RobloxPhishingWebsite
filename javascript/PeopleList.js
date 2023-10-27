! function() {
    var r = {
            2483: function(e, t, r) {
                var n = {
                    "./resources.js": 5361
                };

                function i(e) {
                    e = a(e);
                    return r(e)
                }

                function a(e) {
                    if (r.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (e.exports = i).id = 2483
            },
            7696: function(e, t, r) {
                var n = {
                    "./friendsListController.js": 4336,
                    "./peopleController.js": 4355,
                    "./peopleInfoCardController.js": 2151,
                    "./peopleListContainerController.js": 1641
                };

                function i(e) {
                    e = a(e);
                    return r(e)
                }

                function a(e) {
                    if (r.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (e.exports = i).id = 7696
            },
            3861: function(e, t, r) {
                var n = {
                    "./peopleDirective.js": 8786,
                    "./peopleListContainerDirective.js": 3937,
                    "./peopleListDirective.js": 9489
                };

                function i(e) {
                    e = a(e);
                    return r(e)
                }

                function a(e) {
                    if (r.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (e.exports = i).id = 3861
            },
            9102: function(e, t, r) {
                var n = {
                    "./friendsService.js": 15,
                    "./gamesService.js": 7906,
                    "./layoutService.js": 4622,
                    "./productExperimentationService.js": 6730,
                    "./utilityService.js": 4424
                };

                function i(e) {
                    e = a(e);
                    return r(e)
                }

                function a(e) {
                    if (r.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (e.exports = i).id = 9102
            },
            2082: function(e, t, r) {
                var n = {
                    "./directives/templates/people.html": 3830,
                    "./directives/templates/peopleInfoCard.html": 5796,
                    "./directives/templates/peopleList.html": 5125,
                    "./directives/templates/peopleListContainer.html": 8569
                };

                function i(e) {
                    e = a(e);
                    return r(e)
                }

                function a(e) {
                    if (r.o(n, e)) return n[e];
                    e = new Error("Cannot find module '" + e + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = a, (e.exports = i).id = 2082
            },
            726: function(e) {
                function a(e) {
                    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                }

                function s(e) {
                    return e.split("/").pop().replace(".html", "")
                }
                var t = {
                    importFilesUnderPath: function(e) {
                        e.keys().forEach(e)
                    },
                    templateCacheGenerator: function(e, t, n, i) {
                        return e.module(t, []).run(["$templateCache", function(r) {
                            n && n.keys().forEach(function(e) {
                                var t = a(s(e));
                                r.put(t, n(e))
                            }), i && i.keys().forEach(function(e) {
                                var t = a(s(e));
                                r.put(t, i(e).replace(/<\/?script[^>]*>/gi, ""))
                            })
                        }])
                    }
                };
                e.exports = t
            },
            5361: function(e, t, r) {
                "use strict";
                r.r(t);
                var n = r(792),
                    r = r(7129),
                    n = {
                        templateUrls: {
                            peopleListContainer: "people-list-container",
                            peopleList: "people-list",
                            peopleInfoCard: "people-info-card",
                            people: "people"
                        },
                        apiSets: {
                            getFriendsListUrl: {
                                url: n.EnvironmentUrls ? "".concat(n.EnvironmentUrls.friendsApi, "/v1/users/" + document.getElementById("scriptPeopleList").getAttribute("userid") + "/friends") : "/v1/users/" + document.getElementById("scriptPeopleList").getAttribute("userid") + "/friends",
                                retryable: !0,
                                withCredentials: !0
                            },
                            getMetadataUrl: {
                                url: n.EnvironmentUrls ? "".concat(n.EnvironmentUrls.friendsApi, "/v1/metadata") : "/v1/metadata",
                                retryable: !0,
                                withCredentials: !0
                            },
                            getPresences: {
                                url: n.EnvironmentUrls ? "".concat(n.EnvironmentUrls.presenceApi, "/v1/presence/users") : "/v1/presence/users",
                                retryable: !0,
                                withCredentials: !0
                            },
                            getFriendsProductExperimentationUrl: {
                                url: n.EnvironmentUrls ? "".concat(n.EnvironmentUrls.apiGatewayUrl, "/product-experimentation-platform/v1/projects/1/layers/Social.Friends/values") : "product-experimentation-platform/v1/projects/1/layers/Social.Friends/values",
                                withCredentials: !0
                            },
                            multiGetPlaceDetails: {
                                url: n.EnvironmentUrls ? "".concat(n.EnvironmentUrls.gamesApi, "/v1/games/multiget-place-details") : "/v1/games/multiget-place-details",
                                retryable: !0,
                                withCredentials: !0
                            },
                            multiGetGameIcons: {
                                url: n.EnvironmentUrls ? "".concat(n.EnvironmentUrls.gamesApi, "/v1/games/game-thumbnails") : "/v1/games/game-thumbnails",
                                retryable: !0,
                                withCredentials: !0
                            }
                        },
                        apiParams: {
                            avatarMultiGetLimit: 100,
                            presenceMultiGetLimit: 100
                        },
                        friendsExperimentationVariables: ["friends_sort"],
                        gameIconSize: {
                            lg: {
                                width: 150,
                                height: 150
                            }
                        },
                        eventStreamParams: {
                            goToProfileFromAvatar: {
                                name: "goToProfileFromAvatar",
                                ctx: "click"
                            },
                            goToProfileInPeopleList: {
                                name: "goToProfileFromPeopleList",
                                ctx: "click"
                            },
                            openPeopleList: {
                                name: "openPeopleList",
                                ctx: "hover"
                            },
                            goToChatInPeopleList: {
                                name: "goToChatFromPeopleList",
                                ctx: "click"
                            },
                            joinGameInPeopleList: {
                                name: "joinGameInPeopleList",
                                ctx: "click"
                            },
                            goToGameDetailFromAvatar: {
                                name: "goToGameDetailFromAvatar",
                                ctx: "click"
                            },
                            goToGameDetailInPeopleList: {
                                name: "goToGameDetailInPeopleList",
                                ctx: "click"
                            },
                            gamePlayIntentInPeopleList: {
                                ctx: "peopleListInHomePage"
                            }
                        },
                        hoverPopoverParams: {
                            isOpen: !1,
                            triggerSelector: "",
                            hoverPopoverSelector: "",
                            isDisabled: !!n.DeviceMeta && (!(0, n.DeviceMeta)().isDesktop || (0, n.DeviceMeta)().isUWPApp)
                        },
                        reasonProhibitedMessage: {
                            None: "None",
                            PurchaseRequired: "PurchaseRequired"
                        },
                        peopleInfoCardContainerClass: "card-with-game"
                    };
                n.friendsExperimentationUrlConfig = {
                    url: n.apiSets.getFriendsProductExperimentationUrl.url,
                    timeout: 2e3,
                    withCredentials: !0
                }, r.Z.constant("resources", n), t.default = n
            },
            4336: function(e, t, r) {
                "use strict";
                r.r(t);
                var n = r(5734),
                    s = r.n(n),
                    r = r(7129);

                function i(i, e, t, n, a, r) {
                    i.clickAvatar = function(e, t) {
                        var r = a.eventStreamParams.goToProfileFromAvatar,
                            t = {
                                friendId: e.id,
                                presentStatus: e.presence.userPresenceType,
                                position: t
                            };
                        e.presence.rootPlaceId && (t.rootPlaceId = e.presence.rootPlaceId), n.sendEventWithTarget(r.name, r.ctx, t)
                    }, i.clickPlaceLink = function(e, t) {
                        var r = a.eventStreamParams.goToGameDetailFromAvatar,
                            e = {
                                friendId: e.id,
                                position: t,
                                rootPlaceId: e.presence.rootPlaceId
                            };
                        n.sendEventWithTarget(r.name, r.ctx, e)
                    }, i.updatePresenceStatus = function(e) {
                        for (var t = [], r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.rootPlaceId && !i.library.placesDict[n.rootPlaceId] && t.push(n.rootPlaceId), i.updatePresenceData(n)
                        }
                        0 < t.length && s().isFunction(i.setPlaceDetails) && i.setPlaceDetails(t)
                    }, i.listenToPresenceUpdate = function() {
                        document.addEventListener("Roblox.Presence.Update", function(e) {
                            null != e && e.detail && r(function() {
                                i.updatePresenceStatus(e.detail)
                            })
                        })
                    }, i.init = function() {
                        i.listenToPresenceUpdate()
                    }, i.init()
                }
                i.$inject = ["$scope", "$log", "$document", "eventStreamService", "resources", "$timeout"], r.Z.controller("friendsListController", i), t.default = i
            },
            4355: function(e, t, r) {
                "use strict";
                r.r(t);
                var n = r(5734),
                    i = r.n(n),
                    r = r(7129);

                function a(e, t, r) {
                    e.setupHoverPopover = function() {
                        e.peopleInfoCardPlacement = "bottom", e.peopleInfoCardTemplateUrl = r.templateUrls.peopleInfoCard, e.peopleInfoCardContainerClass = e.friend.presence && e.friend.presence.placeUrl ? r.peopleInfoCardContainerClass : "", e.hoverPopoverParams = i().copy(r.hoverPopoverParams), e.hoverPopoverParams.triggerSelector = "#people-".concat(e.friend.id), e.hoverPopoverParams.hoverPopoverSelector = ".people-info-".concat(e.friend.id), e.hoverPopoverParams.isDisabled = e.hoverPopoverParams.isDisabled || !e.library.isForCurrentUsersFriends
                    }, e.init = function() {
                        e.setupHoverPopover()
                    }, e.init()
                }
                a.$inject = ["$scope", "$log", "resources"], r.Z.controller("peopleController", a), t.default = a
            },
            2151: function(e, t, r) {
                "use strict";
                r.r(t);
                r = r(7129);

                function n(l, e, c, p, r, d, t, n, u) {
                    l.sendEventStream = function(e, t) {
                        (t = t || {}).friendId = l.friend.id, t.position = l.$index, n.sendEventWithTarget(e.name, e.ctx, t)
                    }, l.sendGamePlayEvent = function(e) {
                        n.sendGamePlayEvent(c.eventStreamParams.gamePlayIntentInPeopleList.ctx, e)
                    }, l.clickBtn = function(e) {
                        var t = l.friend.presence.rootPlaceId,
                            r = l.library.placesDict[t],
                            n = p.playButtons,
                            i = {
                                rootPlaceId: t
                            },
                            a = c.eventStreamParams;
                        switch (r.buttonLayout.type) {
                            case n.join.type:
                                var s = l.friend.presence.gameId,
                                    o = l.friend.id,
                                    o = u.buildPlayGameProperties(t, l.friend.presence.placeId, s, o);
                                i.gameInstanceId = s, i.friendId = l.friend.id, i.position = l.$index;
                                s = {
                                    eventName: a.joinGameInPeopleList.name,
                                    ctx: a.joinGameInPeopleList.ctx,
                                    properties: i,
                                    gamePlayIntentEventCtx: c.eventStreamParams.gamePlayIntentInPeopleList.ctx
                                };
                                u.launchGame(o, s);
                                break;
                            case n.details.type:
                                i.fromWhere = e, l.sendEventStream(a.goToGameDetailInPeopleList, i), d.location.href = l.friend.presence.placeUrl
                        }
                    }, l.goToGameDetails = function(e) {
                        e = {
                            rootPlaceId: l.friend.presence.rootPlaceId,
                            fromWhere: e
                        };
                        l.sendEventStream(c.eventStreamParams.goToGameDetailInPeopleList, e), d.location.href = l.friend.presence.placeUrl
                    }, l.goToChat = function() {
                        var e = l.friend.id;
                        l.sendEventStream(c.eventStreamParams.goToChatInPeopleList);
                        var t = r.buildPermissionVerifier({});
                        r.startChat(e, t)
                    }, l.goToProfilePage = function() {
                        l.sendEventStream(c.eventStreamParams.goToGameDetailInPeopleList), d.location.href = l.friend.profileUrl
                    }, l.init = function() {
                        l.sendEventStream(c.eventStreamParams.openPeopleList)
                    }, l.init()
                }
                n.$inject = ["$scope", "$log", "resources", "layoutService", "chatDispatchService", "$window", "gamesService", "eventStreamService", "playGameService"], r.Z.controller("peopleInfoCardController", n), t.default = n
            },
            1641: function(e, t, r) {
                "use strict";
                r.r(t);
                var n = r(5734),
                    c = r.n(n),
                    p = r(792),
                    n = r(7129),
                    d = r(6181);

                function i(s, e, a, t, n, r, i, o, l) {
                    s.applyFriendsSort = function(e) {
                        s.library.useApiSort ? s.library.friendIds = e : t.sortFriendsByPresenceType(s.library)
                    }, s.setPlaceDetails = function(e) {
                        r.multiGetPlaceDetails(e).then(function(e) {
                            c().forEach(e, function(e, t) {
                                if (e) switch ((s.library.placesDict[t] = e).reasonProhibited) {
                                    case i.reasonProhibitedMessage.None:
                                        s.library.placesDict[t].buttonLayout = c().copy(n.playButtons.join);
                                        break;
                                    case i.reasonProhibitedMessage.PurchaseRequired:
                                        s.library.placesDict[t].requiredPurchase = !0;
                                    default:
                                        s.library.placesDict[t].buttonLayout = c().copy(n.playButtons.details)
                                }
                            })
                        })
                    }, s.safelyUpdatePresenceData = function(e, t) {
                        e ? (t && !t.userId && (t = {
                            lastLocation: "Website",
                            userId: e,
                            userPresenceType: 0
                        }, s.layout.invalidPresenceData = !0), t && s.updatePresenceData(t)) : s.layout.invalidPresenceData = !0
                    }, s.updatePresenceData = function(e) {
                        var t = n.presenceTypes;
                        switch (e.userPresenceType) {
                            case t.online.status:
                                e.className = n.presenceTypes.online.className;
                                break;
                            case t.ingame.status:
                                e.className = n.presenceTypes.ingame.className, e.rootPlaceId && (e.placeUrl = n.getGameDetailsPageUrl(e.rootPlaceId));
                                break;
                            case t.instudio.status:
                                e.className = n.presenceTypes.instudio.className
                        }
                        s.library.friendsDict[e.userId] || (s.library.friendsDict[e.userId] = {}), s.library.friendsDict[e.userId].presence = e
                    }, s.buildFriendsInfo = function(i, e) {
                        e.shouldGetPresenceData ? a.getPresences(i).then(function(e) {
                            var n = [];
                            c().forEach(e, function(e, t) {
                                var r = e.rootPlaceId;
                                r && !s.library.placesDict[r] && n.push(r), s.safelyUpdatePresenceData(i[t], e)
                            }), s.applyFriendsSort(i), 0 < n.length && s.setPlaceDetails(n), s.layout.isAllFriendsDataLoaded = !0
                        }) : (s.library.useApiSort || i.sort(function(e, t) {
                            e = s.library.friendsDict[e], t = s.library.friendsDict[t];
                            return e.name.toLowerCase() > t.name.toLowerCase() ? 1 : -1
                        }), s.library.friendIds = i, s.layout.isAllFriendsDataLoaded = !0)
                    }, s.buildFriendsList = function(e) {
                        a.getFriendsList(e).then(function(e) {
                            var e = e.data || e,
                                r = [];
                            c().forEach(e, function(e) {
                                var t = e.id;
                                r.indexOf(t) < 0 && r.push(t), e.profileUrl = n.getProfilePageUrl(t), e.nameToDisplay = p.DisplayNames.Enabled() ? e.displayName : e.name, s.library.friendsDict[t] = e
                            }), s.buildFriendsInfo(r, {
                                shouldGetPresenceData: s.library.isForCurrentUsersFriends
                            }), s.library.numOfFriends = e.length
                        }, function(e) {
                            s.layout.friendsError = !0, s.layout.isAllFriendsDataLoaded = !0
                        })
                    }, s.setup = function() {
                        var e;
                        s.library = {
                            friendsDict: {},
                            friendIds: [],
                            isForCurrentUsersFriends: !(null !== (e = (0, d.j)()) || !p.CurrentUser) || e === p.CurrentUser.userId,
                            placesDict: {},
                            numOfFriends: null,
                            useApiSort: !1
                        }, s.layout = n
                    }, s.buildFriendsListFromSharedService = function(e) {
                        s.layout.invalidPresenceData = !1, s.$evalAsync(function() {
                            var n, i, a;
                            null != e && e.length && (n = [], i = [], a = 0, c().forEach(e, function(e) {
                                var t = e,
                                    r = t.id;
                                s.library.friendsDict[r] = e, n.push(r), t.nameToDisplay = p.DisplayNames.Enabled() ? e.displayName : e.name;
                                t = e.presence.rootPlaceId;
                                t && !s.library.placesDict[t] && i.push(t), s.safelyUpdatePresenceData(e.id, e.presence), a += 1
                            }), s.library.numOfFriends = a, s.applyFriendsSort(n), 0 < i.length && s.setPlaceDetails(i)), s.layout.isAllFriendsDataLoaded = !0
                        })
                    }, s.init = function() {
                        var e;
                        s.setup();
                        var r = null !== (e = (0, d.j)()) && void 0 !== e ? e : p.CurrentUser.userId,
                            n = i.friendsExperimentationVariables;
                        p.CurrentUser && r === p.CurrentUser.userId ? o.getFriendsPresence().then(function(t) {
                            l.getFriendsExperimentationValues(n).then(function(e) {
                                e = e.data;
                                null != e && e.friends_sort ? a.getMetadata(r).then(function(e) {
                                    e.isSortFriendsInApiExperimentEnabled && (s.library.useApiSort = !0), s.buildFriendsListFromSharedService(t)
                                }) : s.buildFriendsListFromSharedService(t)
                            }).catch(function() {
                                s.buildFriendsListFromSharedService(t)
                            })
                        }, function(e) {
                            console.debug(e), s.layout.friendsError = !0, s.layout.isAllFriendsDataLoaded = !0
                        }) : s.buildFriendsList(r)
                    }, s.init()
                }
                i.$inject = ["$scope", "$log", "friendsService", "utilityService", "layoutService", "gamesService", "resources", "usersPresenceService", "productExperimentationService"], n.Z.controller("peopleListContainerController", i), t.default = i
            },
            8786: function(e, t, r) {
                "use strict";
                r.r(t);
                r = r(7129);

                function n(e) {
                    return {
                        restrict: "A",
                        scope: !0,
                        replace: !0,
                        templateUrl: e.templateUrls.people
                    }
                }
                n.$inject = ["resources"], r.Z.directive("people", n), t.default = n
            },
            3937: function(e, t, r) {
                "use strict";
                r.r(t);
                r = r(7129);

                function n(e, t) {
                    return {
                        restrict: "A",
                        scope: !0,
                        replace: !0,
                        templateUrl: e.templateUrls.peopleListContainer,
                        link: function() {
                            t.isFriendsListLoaded = !0
                        }
                    }
                }
                n.$inject = ["resources", "$rootScope"], r.Z.directive("peopleListContainer", n), t.default = n
            },
            9489: function(e, t, r) {
                "use strict";
                r.r(t);
                r = r(7129);

                function n(e) {
                    return {
                        restrict: "A",
                        scope: !0,
                        replace: !0,
                        templateUrl: e.templateUrls.peopleList
                    }
                }
                n.$inject = ["resources"], r.Z.directive("peopleList", n), t.default = n
            },
            7129: function(e, t, r) {
                "use strict";
                var n = r(792),
                    i = r(5734),
                    i = r.n(i)().module("peopleList", ["peopleListHtmlTemplateApp", "robloxApp", "ui.bootstrap", "thumbnails"]).config(["languageResourceProvider", function(e) {
                        var t = n.Lang.PeopleListResources,
                            t = {
                                "Label.PresenceError": t && t["Label.PresenceError"] || "User status may be out of date",
                                "Label.FriendsError": t && t["Label.FriendsError"] || "Unable to load friends"
                            };
                        n.Lang.PeopleListResources && (e.setLanguageKeysFromFile(n.Lang.PeopleListResources), e.setLanguageKeysFromFile(t))
                    }]);
                t.Z = i
            },
            15: function(e, t, r) {
                "use strict";
                r.r(t);
                r = r(7129);

                function n(l, r, c, n) {
                    var i = r.apiSets;
                    return {
                        getFriendsList: function(e) {
                            var t = i.getFriendsListUrl.url;
                            return i.getFriendsListUrl.url = n("formatString")(t, {
                                userId: e
                            }), c.httpGet(i.getFriendsListUrl)
                        },
                        buildBatchPromises: function(e, t, r, n) {
                            for (var i = [], a = 0, s = e.slice(a, t); 0 < s.length;) {
                                var o = {
                                    userIds: s
                                };
                                n ? i.push(c.httpPost(r, o)) : i.push(c.httpGet(r, o)), a++, s = e.slice(a * t, a * t + t)
                            }
                            return l.all(i)
                        },
                        getPresences: function(e) {
                            var t = r.apiParams.presenceMultiGetLimit;
                            return this.buildBatchPromises(e, t, i.getPresences, !0).then(function(e) {
                                if (e && 0 < e.length) {
                                    var t = [];
                                    return angular.forEach(e, function(e) {
                                        e = e.userPresences;
                                        t = t.concat(e)
                                    }), t
                                }
                                return null
                            })
                        },
                        getMetadata: function(e) {
                            e = {
                                targetUserId: e
                            };
                            return c.httpGet(i.getMetadataUrl, e)
                        }
                    }
                }
                n.$inject = ["$q", "resources", "httpService", "$filter"], r.Z.factory("friendsService", n), t.default = n
            },
            7906: function(e, t, r) {
                "use strict";
                r.r(t);
                var i = r(792),
                    r = r(7129);

                function n(e, t, r) {
                    var n = t.apiSets;
                    return {
                        joinGame: function(e, t) {
                            i.GameLauncher.joinGameInstance(e, t, !0, !0)
                        },
                        multiGetPlaceDetails: function(e) {
                            e = {
                                placeIds: e
                            };
                            return r.httpGet(n.multiGetPlaceDetails, e).then(function(e) {
                                var t = [],
                                    r = {};
                                return angular.forEach(e, function(e) {
                                    e && e.imageToken && t.push(e.imageToken), r[e.placeId] = e
                                }), r
                            })
                        }
                    }
                }
                n.$inject = ["$q", "resources", "httpService"], r.Z.factory("gamesService", n), t.default = n
            },
            4622: function(e, t, r) {
                "use strict";
                r.r(t);
                var n = r(7129),
                    a = r(6181);

                function i(e, t, r, n) {
                    var i = e;
                    return {
                        sectionTitle: i.get("Heading.Friends"),
                        seeAllBtnText: i.get("Heading.SeeAll"),
                        maxNumberOfFriendsDisplayed: 9,
                        isAllFriendsDataLoaded: !1,
                        isAvatarDataLoaded: !1,
                        presenceTypes: {
                            offline: {
                                status: 0,
                                className: ""
                            },
                            online: {
                                status: 1,
                                className: "icon-online"
                            },
                            ingame: {
                                status: 2,
                                className: "icon-game"
                            },
                            instudio: {
                                status: 3,
                                className: "icon-studio"
                            }
                        },
                        getFriendsPageUrl: function() {
                            var e = (0, a.j)();
                            return null !== e ? t.getAbsoluteUrl("/users/".concat(e, "/friends")) : t.getAbsoluteUrl("/users/friends")
                        },
                        getGameDetailsPageUrl: function(e) {
                            e = r("formatString")("/games/{placeId}/gamename", {
                                placeId: e
                            });
                            return t.getAbsoluteUrl(e)
                        },
                        getProfilePageUrl: function(e) {
                            e = r("formatString")("/users/{userId}/profile", {
                                userId: e
                            });
                            return t.getAbsoluteUrl(e)
                        },
                        playButtons: {
                            join: {
                                type: "join",
                                text: i.get("Action.Join"),
                                className: "btn-growth-sm",
                                isPlayable: !0
                            },
                            buy: {
                                type: "buy",
                                text: i.get("Action.Buy"),
                                className: "btn-primary-sm",
                                isPlayable: !1
                            },
                            details: {
                                type: "details",
                                text: i.get("Action.ViewDetails"),
                                className: "btn-control-sm",
                                isPlayable: !1
                            }
                        },
                        interactionLabels: {
                            chat: function(e) {
                                return i.get("Label.Chat", {
                                    username: e
                                })
                            },
                            viewProfile: i.get("Label.ViewProfile")
                        },
                        thumbnailTypes: n.thumbnailTypes
                    }
                }
                i.$inject = ["languageResource", "urlService", "$filter", "thumbnailConstants"], n.Z.factory("layoutService", i), t.default = i
            },
            6730: function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, {
                    default: function() {
                        return a
                    }
                });
                var n = CoreUtilities,
                    r = r(7129);

                function i(e) {
                    var t = e.friendsExperimentationUrlConfig;
                    return {
                        getFriendsExperimentationValues: function(e) {
                            e = {
                                parameters: e.join(",")
                            };
                            return n.httpService.get(t, e)
                        }
                    }
                }
                i.$inject = ["resources"], r.Z.factory("productExperimentationService", i);
                var a = i
            },
            4424: function(e, t, r) {
                "use strict";
                r.r(t);
                r = r(7129);

                function n(o, l, e) {
                    return {
                        sortFriendsByOnlineOffline: function(t) {
                            var e = o("orderBy"),
                                r = [],
                                n = [];
                            angular.forEach(t.friendsDict, function(e) {
                                (e.presence && 0 < e.presence.userPresenceType ? r : n).push(e)
                            }), r = e(r, "+name"), n = e(n, "+name"), (r = r.concat(n)).forEach(function(e) {
                                t.friendIds.push(e.id)
                            })
                        },
                        sortFriendsByPresenceType: function(t) {
                            var e = o("orderBy"),
                                r = [],
                                n = [],
                                i = [],
                                a = [],
                                s = l.presenceTypes;
                            angular.forEach(t.friendsDict, function(e) {
                                if (!e.presence) return !1;
                                switch (e.presence.userPresenceType) {
                                    case s.online.status:
                                        r.push(e);
                                        break;
                                    case s.offline.status:
                                        n.push(e);
                                        break;
                                    case s.ingame.status:
                                        i.push(e);
                                        break;
                                    case s.instudio.status:
                                        a.push(e)
                                }
                            }), r = e(r, "+name"), n = e(n, "+name"), i = e(i, "+name"), a = e(a, "+name"), (i = (i = (i = i.concat(r)).concat(a)).concat(n)).forEach(function(e) {
                                t.friendIds.indexOf(e.id) < 0 && t.friendIds.push(e.id)
                            })
                        }
                    }
                }
                n.$inject = ["$filter", "layoutService", "$log"], r.Z.factory("utilityService", n), t.default = n
            },
            6181: function(e, t, r) {
                "use strict";

                function n() {
                    var e = /\/users\/(\d+)\//g.exec(window.location.href);
                    return e ? e[1] : null
                }
                r.d(t, {
                    j: function() {
                        return n
                    }
                })
            },
            3830: function(e) {
                e.exports = '<div ng-controller="peopleController"> <div class="avatar-container"> <a href="{{friend.profileUrl}}" class="text-link friend-link" ng-click="clickAvatar(friend, $index)" popover-trigger=" \'none\' " popover-class="people-info-card-container {{peopleInfoCardContainerClass}} people-info-{{friend.id}}" popover-placement="{{peopleInfoCardPlacement}}" popover-append-to-body="true" popover-is-open="hoverPopoverParams.isOpen" hover-popover-params="hoverPopoverParams" hover-popover uib-popover-template="\'{{peopleInfoCardTemplateUrl}}\'"> <div class="avatar avatar-card-fullbody"> <span class="avatar-card-link friend-avatar" ng-class="{\'icon-placeholder-avatar-headshot\': !friend.avatar.imageUrl}"> <thumbnail-2d class="avatar-card-image" thumbnail-type="layout.thumbnailTypes.avatarHeadshot" thumbnail-target-id="friend.id"></thumbnail-2d> </span> </div> <span class="text-overflow friend-name font-caption-header" ng-bind="friend.nameToDisplay" title="{{friend.nameToDisplay}}"></span> <div class="text-overflow xsmall text-label place-name" ng-if="friend.presence.placeUrl" ng-bind="library.placesDict[friend.presence.rootPlaceId].name"></div> </a> <a class="friend-status place-link" ng-href="{{friend.presence.placeUrl}}" ng-if="friend.presence.placeUrl" ng-click="clickPlaceLink(friend, $index)"> <span class="avatar-status friend-status {{friend.presence.className}}" title="{{friend.presence.lastLocation}}"></span> </a> <span ng-if="!friend.presence.placeUrl" class="avatar-status friend-status {{friend.presence.className}}" title="{{friend.presence.lastLocation}}"></span> </div> </div>'
            },
            5796: function(e) {
                e.exports = '<div ng-controller="peopleInfoCardController" ng-class="{\'card-with-game\': friend.presence.placeUrl}"> <div class="border-bottom place-container" ng-show="friend.presence.placeUrl"> <span ng-click="goToGameDetails(\'icon\')"> <thumbnail-2d class="cursor-pointer place-icon" thumbnail-type="layout.thumbnailTypes.gameIcon" thumbnail-target-id="library.placesDict[friend.presence.rootPlaceId].universeId"></thumbnail-2d> </span> <div class="place-info-container"> <div class="place-info"> <span class="text-subject cursor-pointer place-title" ng-bind="library.placesDict[friend.presence.rootPlaceId].name" ng-click="goToGameDetails(\'link\')"></span> <div class="icon-text-wrapper" ng-show="library.placesDict[friend.presence.rootPlaceId].requiredPurchase"> <span class="icon-robux"></span> <span class="text-robux" ng-bind="library.placesDict[friend.presence.rootPlaceId].price"></span> </div> </div> <div class="place-btn-container"> <button class="btn-full-width place-btn {{library.placesDict[friend.presence.rootPlaceId].buttonLayout.className}}" ng-click="clickBtn(\'btn\')"> {{library.placesDict[friend.presence.rootPlaceId].buttonLayout.text}} </button> </div> </div> </div> <ul class="dropdown-menu interaction-container"> <li class="interaction-item" ng-click="goToChat()"> <span class="icon icon-chat-gray"></span> <span class="text-overflow border-bottom label" ng-bind="layout.interactionLabels.chat(friend.nameToDisplay)" title="{{layout.interactionLabels.chat(friend.nameToDisplay)}}"></span> </li> <li class="interaction-item" ng-click="goToProfilePage()"> <span class="icon icon-viewdetails"></span> <span class="label" ng-bind="layout.interactionLabels.viewProfile"></span> </li> </ul> </div>'
            },
            5125: function(e) {
                e.exports = '<ul class="hlist" ng-controller="friendsListController"> <li id="people-{{friend.id}}" rbx-user-id="{{friend.id}}" class="list-item friend" ng-repeat="friend in library.friendsDict | orderList: library.friendIds | limitTo: layout.maxNumberOfFriendsDisplayed"> <div people></div> </li> </ul> '
            },
            8569: function(e) {
                e.exports = '<div ng-controller="peopleListContainerController"> <div class="col-xs-12 people-list-container" ng-show="layout.isAllFriendsDataLoaded && library.numOfFriends > 0 || layout.friendsError"> <div class="section home-friends"> <div class="container-header people-list-header"> <h3> {{layout.sectionTitle}}<span ng-show="library.numOfFriends !== null" class="friends-count">({{library.numOfFriends}})</span> </h3> <span ng-show="layout.invalidPresenceData" class="presence-error"> <span class="icon-warning"></span> <span class="text-error" ng-bind="\'Label.PresenceError\' | translate"></span> </span> <a href="{{layout.getFriendsPageUrl()}}" class="btn-secondary-xs btn-more see-all-link-icon">{{layout.seeAllBtnText}}</a> </div> <div class="section-content remove-panel people-list"> <p ng-show="layout.friendsError" class="section-content-off" ng-bind="\'Label.FriendsError\' | translate"></p> <div people-list ng-class="{\'invisible\': !layout.isAllFriendsDataLoaded}"></div> <span class="spinner spinner-default" ng-show="!layout.isAllFriendsDataLoaded"></span> </div> </div> </div> <div class="col-xs-12 people-list-container" ng-hide="layout.isAllFriendsDataLoaded"> <div class="section home-friends"> <div class="container-header people-list-header"> <h3>{{layout.sectionTitle}}</h3> </div> <div class="section-content remove-panel people-list"> <span class="spinner spinner-default"></span> </div> </div> </div> </div> '
            },
            792: function(e) {
                "use strict";
                e.exports = Roblox
            },
            5734: function(e) {
                "use strict";
                e.exports = angular
            }
        },
        n = {};

    function a(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            exports: {}
        };
        return r[e](t, t.exports, a), t.exports
    }
    a.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return a.d(t, {
                a: t
            }), t
        }, a.d = function(e, t) {
            for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            "use strict";
            var e = a(5734),
                t = a.n(e),
                r = a(726),
                n = a(7129);
            (0, r.importFilesUnderPath)(a(2483)), (0, r.importFilesUnderPath)(a(3861)), (0, r.importFilesUnderPath)(a(7696)), (0, r.importFilesUnderPath)(a(9102));
            var e = a(2082),
                i = (0, r.templateCacheGenerator)(t(), "peopleListHtmlTemplateApp", e);
            t().element("#people-list-container").hasClass("no-self-bootstrap") ? window.peopleList = n.Z : t().element(function() {
                t().bootstrap("#people-list-container", [n.Z.name, i.name])
            })
        }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/4666f21ed8044e43a974-peopleList.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("PeopleList");