declare module CodereReaderModel {
  interface OddInterface {
    Results: Result[];
    DisplayTypeName: string;
    CategoryInfo?: CategoryInfo;
    CategoryInfos: CategoryInfo[];
    GameType: number;
    SmartMarketAvailable: boolean;
    Spov: string;
    Name: string;
    NodeId: string;
    ParentNodeId: string;
    EventNodeTypeId: number;
    Priority: number;
    SportHandle?: any;
    ChildrenCount: number;
    Locked: boolean;
  }

  interface CategoryInfo {
    CategoryId: string;
    CategoryName: string;
    IsRelevant: boolean;
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
