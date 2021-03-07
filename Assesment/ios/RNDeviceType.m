//
//  RNDeviceType.m
//  Assesment
//
//  Created by Rahul Soni on 06/03/21.
//

#import "RNDeviceType.h"

@implementation RNDeviceType

// To export a module named RNDeviceType
RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  #if TARGET_OS_SIMULATOR
    return @{ @"isEmulator": @TRUE };
  #else
    return @{ @"isEmulator": @FALSE };
  #endif
}

@end
