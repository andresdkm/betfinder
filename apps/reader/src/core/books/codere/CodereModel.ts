declare module CodereModel {
  interface SportInterface {
    BookmakerID: number;
    Name: string;
    NodeId: string;
    ParentNodeId: string;
    EventNodeTypeId: number;
    Priority: number;
    SportHandle: string;
    ChildrenCount: number;
    Locked: boolean;
  }

  interface CountryInterface {
    Leagues: League[];
    CountryCode: string;
    Name: string;
    NodeId: string;
    ParentNodeId: string;
    EventNodeTypeId: number;
    Priority: number;
    SportHandle: string;
    ChildrenCount: number;
    Locked: boolean;
  }

  interface League {
    Events: any[];
    Name: string;
    NodeId: string;
    ParentNodeId: string;
    EventNodeTypeId: number;
    Priority: number;
    SportHandle?: any;
    ChildrenCount: number;
    Locked: boolean;
  }

  interface EventInterface {
    SportName: string;
    CountryName?: any;
    CountryCode: string;
    LeagueName: string;
    StarDate: string;
    Games: Game[];
    isLive: boolean;
    StatisticsId: string;
    StreamingEnabled: string;
    SmartMarketAvailable: boolean;
    SmartMarketReferenceGameTypeIds: string;
    Participants: Participant[];
    liveData?: any;
    Name: string;
    NodeId: string;
    ParentNodeId: string;
    EventNodeTypeId: number;
    Priority: number;
    SportHandle: string;
    ChildrenCount: number;
    Locked: boolean;
  }

  interface Participant {
    ExtensionData: ExtensionData;
    Id: number;
    IsHome: boolean;
    LocalizedNames: LocalizedNames;
    LocalizedShortNames: LocalizedNames;
  }

  interface LocalizedNames {
    LocalizedValues: LocalizedValue[];
    ExtensionData: ExtensionData;
    ReferenceId: number;
  }

  interface LocalizedValue {
    ExtensionData: ExtensionData;
    CountryCode: string;
    LanguageCode: string;
    Value: string;
  }

  interface ExtensionData {
  }

  interface Game {
    Results: Result[];
    DisplayTypeName: string;
    CategoryInfo?: any;
    CategoryInfos?: any;
    GameType: number;
    SmartMarketAvailable: boolean;
    Spov?: any;
    Name: string;
    NodeId: string;
    ParentNodeId: string;
    EventNodeTypeId: number;
    Priority: number;
    SportHandle?: any;
    ChildrenCount: number;
    Locked: boolean;
  }

  interface Result {
    Odd: number;
    SortOrder: number;
    IsLive: boolean;
    upOdd: boolean;
    downOdd: boolean;
    Name: string;
    NodeId: string;
    ParentNodeId: string;
    EventNodeTypeId: number;
    Priority: number;
    SportHandle?: any;
    ChildrenCount: number;
    Locked: boolean;
  }
}
