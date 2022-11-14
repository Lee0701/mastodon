/*eslint eqeqeq: "off"*/
/*eslint no-nested-ternary: "off"*/
/*eslint quotes: "off"*/

export default [
  {
    locale: "ko",
    pluralRuleFunction: function(e, a) {
      return "other";
    },
    fields: {
      year: {
        displayName: "년",
        relative: {
          0: "올해",
          1: "내년",
          "-1": "작년"
        },
        relativeTime: {
          future: {
            other: "{0}년 후"
          },
          past: {
            other: "{0}년 전"
          }
        }
      },
      "year-short": {
        displayName: "년",
        relative: {
          0: "올해",
          1: "내년",
          "-1": "작년"
        },
        relativeTime: {
          future: {
            other: "{0}년 후"
          },
          past: {
            other: "{0}년 전"
          }
        }
      },
      month: {
        displayName: "월",
        relative: {
          0: "이번 달",
          1: "다음 달",
          "-1": "지난달"
        },
        relativeTime: {
          future: {
            other: "{0}개월 후"
          },
          past: {
            other: "{0}개월 전"
          }
        }
      },
      "month-short": {
        displayName: "월",
        relative: {
          0: "이번 달",
          1: "다음 달",
          "-1": "지난달"
        },
        relativeTime: {
          future: {
            other: "{0}개월 후"
          },
          past: {
            other: "{0}개월 전"
          }
        }
      },
      day: {
        displayName: "일",
        relative: {
          0: "오늘",
          1: "내일",
          2: "모레",
          "-2": "그저께",
          "-1": "어제"
        },
        relativeTime: {
          future: {
            other: "{0}일 후"
          },
          past: {
            other: "{0}일 전"
          }
        }
      },
      "day-short": {
        displayName: "일",
        relative: {
          0: "오늘",
          1: "내일",
          2: "모레",
          "-2": "그저께",
          "-1": "어제"
        },
        relativeTime: {
          future: {
            other: "{0}일 후"
          },
          past: {
            other: "{0}일 전"
          }
        }
      },
      hour: {
        displayName: "시",
        relative: {
          0: "현재 시간"
        },
        relativeTime: {
          future: {
            other: "{0}시간 후"
          },
          past: {
            other: "{0}시간 전"
          }
        }
      },
      "hour-short": {
        displayName: "시",
        relative: {
          0: "현재 시간"
        },
        relativeTime: {
          future: {
            other: "{0}시간 후"
          },
          past: {
            other: "{0}시간 전"
          }
        }
      },
      minute: {
        displayName: "분",
        relative: {
          0: "현재 분"
        },
        relativeTime: {
          future: {
            other: "{0}분 후"
          },
          past: {
            other: "{0}분 전"
          }
        }
      },
      "minute-short": {
        displayName: "분",
        relative: {
          0: "현재 분"
        },
        relativeTime: {
          future: {
            other: "{0}분 후"
          },
          past: {
            other: "{0}분 전"
          }
        }
      },
      second: {
        displayName: "초",
        relative: {
          0: "지금"
        },
        relativeTime: {
          future: {
            other: "{0}초 후"
          },
          past: {
            other: "{0}초 전"
          }
        }
      },
      "second-short": {
        displayName: "초",
        relative: {
          0: "지금"
        },
        relativeTime: {
          future: {
            other: "{0}초 후"
          },
          past: {
            other: "{0}초 전"
          }
        }
      }
    }
  }, {
    locale: "ko-KP",
    parentLocale: "ko"
  }, {
    locale: "ko-Hang",
    parentLocale: "ko"
  }, {
    locale: "ko-Kore",
    parentLocale: "ko"
  }
]
